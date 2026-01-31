import { app } from '../server/index.ts';
import { registerRoutes } from '../server/routes.ts';

let initialized = false;

export default async function handler(req: any, res: any) {
    if (!initialized) {
        // Register routes synchronously (registerRoutes calls app.post internally)
        await registerRoutes(app);
        initialized = true;
    }
    return app(req, res);
}
