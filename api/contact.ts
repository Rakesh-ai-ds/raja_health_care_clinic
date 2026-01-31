import { Resend } from "resend";
import { contactSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    try {
        const contactData = contactSchema.parse(req.body);

        if (!process.env.RESEND_API_KEY) {
            console.error("Contact API: RESEND_API_KEY is missing.");
            return res.status(500).json({ success: false, error: "Email service not configured" });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const notifyTo = process.env.NOTIFY_TO || "rajahealthcaraclinic@gmail.com";

        const { data, error } = await resend.emails.send({
            from: "RAJA Health Care <onboarding@resend.dev>",
            to: [notifyTo],
            replyTo: contactData.email,
            subject: `Contact Form: ${contactData.subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return res.status(500).json({ success: false, error: "Failed to send email" });
        }

        return res.status(200).json({ success: true, message: "Sent successfully", id: data?.id });
    } catch (err) {
        console.error("Handler Error:", err);
        return res.status(500).json({ success: false, error: "Internal Error" });
    }
}
