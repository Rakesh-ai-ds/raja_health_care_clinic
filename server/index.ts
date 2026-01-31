import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import { registerRoutes } from "./routes.ts";
import { setupVite, serveStatic, log } from "./vite.ts";

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

export const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Initialize and register routes
const startServer = async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    if (app.get("env") === "development") throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else if (!process.env.VERCEL) {
    // Only serve static files via Express if NOT on Vercel
    // Vercel handles static files via the "dist" output folder automatically
    serveStatic(app);
  }

  // Only start listening if we're not on Vercel
  if (!process.env.VERCEL) {
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`serving on port ${port}`);
    });
  }
};

startServer().catch(err => {
  console.error("Failed to start server:", err);
});
