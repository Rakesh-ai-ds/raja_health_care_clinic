import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from "resend";
import { z } from "zod";

// Inline schema to avoid cross-directory import issues on Vercel
const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    subject: z.string().min(3),
    message: z.string().min(10),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log("[contact] Handler invoked, method:", req.method);

    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    try {
        const body = req.body;
        console.log("[contact] Request body:", JSON.stringify(body));

        const contactData = contactSchema.parse(body);

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("[contact] RESEND_API_KEY is missing!");
            return res.status(500).json({ success: false, error: "Email service not configured" });
        }

        const resend = new Resend(apiKey);
        const notifyTo = process.env.NOTIFY_TO || "rajahealthcaraclinic@gmail.com";

        console.log("[contact] Sending email to:", notifyTo);

        const { data, error } = await resend.emails.send({
            from: "RAJA Health Care <onboarding@resend.dev>",
            to: [notifyTo],
            replyTo: contactData.email,
            subject: `Contact Form: ${contactData.subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("[contact] Resend Error:", JSON.stringify(error));
            return res.status(500).json({ success: false, error: "Failed to send email", details: error });
        }

        console.log("[contact] Email sent successfully, ID:", data?.id);
        return res.status(200).json({ success: true, message: "Sent successfully", id: data?.id });
    } catch (err: any) {
        console.error("[contact] Handler Error:", err?.message || err);
        return res.status(500).json({ success: false, error: err?.message || "Internal Error" });
    }
}
