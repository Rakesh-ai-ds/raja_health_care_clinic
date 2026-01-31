import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from "resend";
import { z } from "zod";

// Inline schema
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
        console.log("[contact] Parsing body...");

        const contactData = contactSchema.parse(body);
        console.log("[contact] Data parsed successfully for:", contactData.name);

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("[contact] RESEND_API_KEY is missing!");
            return res.status(500).json({ success: false, error: "Email service not configured" });
        }

        const resend = new Resend(apiKey);

        // IMPORTANT: When using onboarding@resend.dev, you can ONLY send to the email 
        // that was used to register the Resend account
        const recipientEmail = "rajahealthcaraclinic@gmail.com";

        console.log("[contact] Sending email...");
        console.log("[contact] From: onboarding@resend.dev");
        console.log("[contact] To:", recipientEmail);

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: recipientEmail,
            subject: `Contact: ${contactData.subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
      `,
        });

        if (error) {
            console.error("[contact] Resend Error:", JSON.stringify(error));
            return res.status(500).json({
                success: false,
                error: "Failed to send email",
                details: error
            });
        }

        console.log("[contact] Email sent successfully, ID:", data?.id);
        return res.status(200).json({ success: true, message: "Sent successfully", id: data?.id });
    } catch (err: any) {
        console.error("[contact] Handler Error:", err?.message || err);
        return res.status(500).json({ success: false, error: err?.message || "Internal Error" });
    }
}
