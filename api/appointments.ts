import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from "resend";
import { z } from "zod";

// Inline schema
const appointmentSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  preferredDate: z.string().min(1),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  service: z.string().min(1),
  reason: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log("[appointments] Handler invoked, method:", req.method);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const body = req.body;
    console.log("[appointments] Parsing body...");

    const appointmentData = appointmentSchema.parse(body);
    console.log("[appointments] Data parsed successfully for:", appointmentData.fullName);

    const timeSlotMap: Record<string, string> = {
      morning: "Morning (9:00 AM - 12:00 PM)",
      afternoon: "Afternoon (12:00 PM - 3:00 PM)",
      evening: "Evening (3:00 PM - 6:00 PM)",
    };
    const timeSlot = timeSlotMap[appointmentData.preferredTime];

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[appointments] RESEND_API_KEY is missing!");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }

    const resend = new Resend(apiKey);

    // IMPORTANT: When using onboarding@resend.dev, you can ONLY send to the email 
    // that was used to register the Resend account
    const recipientEmail = "rajahealthcaraclinic@gmail.com";

    console.log("[appointments] Sending email...");
    console.log("[appointments] From: onboarding@resend.dev");
    console.log("[appointments] To:", recipientEmail);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmail,
      subject: `New Appointment: ${appointmentData.fullName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${appointmentData.fullName}</p>
        <p><strong>Email:</strong> ${appointmentData.email}</p>
        <p><strong>Phone:</strong> ${appointmentData.phone}</p>
        <p><strong>Date:</strong> ${appointmentData.preferredDate}</p>
        <p><strong>Time:</strong> ${timeSlot}</p>
        <p><strong>Service:</strong> ${appointmentData.service}</p>
        ${appointmentData.reason ? `<p><strong>Reason:</strong> ${appointmentData.reason}</p>` : ''}
      `,
    });

    if (error) {
      console.error("[appointments] Resend Error:", JSON.stringify(error));
      return res.status(500).json({
        success: false,
        error: "Failed to send email",
        details: error
      });
    }

    console.log("[appointments] Email sent successfully, ID:", data?.id);
    return res.status(200).json({ success: true, message: "Sent successfully", id: data?.id });
  } catch (err: any) {
    console.error("[appointments] Handler Error:", err?.message || err);
    return res.status(500).json({ success: false, error: err?.message || "Internal Error" });
  }
}
