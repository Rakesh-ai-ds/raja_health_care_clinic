import { Resend } from "resend";
import { contactSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const ct = (req.headers['content-type'] || '').toString().toLowerCase();
    if (!ct.includes('application/json')) {
      return res.status(400).json({ success: false, error: "Invalid content type. Expected application/json" });
    }

    let body = req.body;
    if (!body || typeof body === "string") {
      try {
        body = body ? JSON.parse(body) : {};
      } catch (e) {
        return res.status(400).json({ success: false, error: "Invalid JSON body" });
      }
    }

    const parsed = contactSchema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      console.error("Contact API: RESEND_API_KEY is missing. Set it in .env.local for vercel dev or in Vercel project settings.");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const notifyTo = process.env.NOTIFY_TO || "info@rajahealthcare.com";
    const { data, error } = await resend.emails.send({
      from: "RAJA Health Care <onboarding@resend.dev>",
      to: [notifyTo],
      replyTo: parsed.email,
      subject: `Contact Form: ${parsed.subject}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Name:</td><td style="padding: 8px 0;">${parsed.name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td><td style="padding: 8px 0;">${parsed.email}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td><td style="padding: 8px 0;">${parsed.phone}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject:</td><td style="padding: 8px 0;"><strong>${parsed.subject}</strong></td></tr>
              </table>
            </div>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Message</h3>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${parsed.message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Please respond to this inquiry within 24-48 hours.</p>
              <p style="margin-top: 10px;"><strong>RAJA Health Care Clinic</strong><br>Arisipalayam, Salem</p>
            </div>
          </div>
        `,
    });

    if (error) {
      console.error("Resend email send error (contact):", error);
      return res.status(500).json({ success: false, error: "Failed to send contact message" });
    }

    return res.status(200).json({ success: true, message: "Contact message sent successfully", emailId: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    if (err instanceof z.ZodError) {
      return res.status(400).json({ success: false, error: "Invalid contact data", details: err.errors });
    }
    return res.status(500).json({ success: false, error: "Failed to process contact form" });
  }
}
