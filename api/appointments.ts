import { Resend } from "resend";
import { appointmentSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  const ct = (req.headers['content-type'] || '').toString().toLowerCase();
  if (!ct.includes('application/json')) {
    return res.status(400).json({ success: false, error: "Invalid content type. Expected application/json" });
  }

  try {
    let body = req.body;
    if (!body || typeof body === "string") {
      try {
        body = body ? JSON.parse(body) : {};
      } catch (e) {
        return res.status(400).json({ success: false, error: "Invalid JSON body" });
      }
    }

    const parsed = appointmentSchema.parse(body);

    const timeSlot = {
      morning: "Morning (9:00 AM - 12:00 PM)",
      afternoon: "Afternoon (12:00 PM - 3:00 PM)",
      evening: "Evening (3:00 PM - 6:00 PM)",
    }[parsed.preferredTime];

    if (!process.env.RESEND_API_KEY) {
      console.error("Appointments API: RESEND_API_KEY is missing. Set it in .env.local for vercel dev or in Vercel project settings.");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const notifyTo = process.env.NOTIFY_TO || "info@rajahealthcare.com";
    const { data, error } = await resend.emails.send({
      from: "RAJA Health Care <onboarding@resend.dev>",
      to: [notifyTo],
      replyTo: parsed.email,
      subject: `New Appointment Request from ${parsed.fullName}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Appointment Request
            </h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Patient Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Full Name:</td><td style="padding: 8px 0;">${parsed.fullName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td><td style="padding: 8px 0;">${parsed.email}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td><td style="padding: 8px 0;">${parsed.phone}</td></tr>
              </table>
            </div>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Appointment Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Preferred Date:</td><td style="padding: 8px 0;">${new Date(parsed.preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Preferred Time:</td><td style="padding: 8px 0;">${timeSlot}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service:</td><td style="padding: 8px 0;">${parsed.service}</td></tr>
              </table>
            </div>
            ${parsed.reason ? `<div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;"><h3 style="margin-top: 0; color: #1e293b;">Reason for Visit</h3><p style="margin: 0; line-height: 1.6;">${parsed.reason}</p></div>` : ''}
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Please contact the patient within 24 hours to confirm the appointment.</p>
              <p style="margin-top: 10px;"><strong>RAJA Health Care Clinic</strong><br>Arisipalayam, Salem</p>
            </div>
          </div>
        `,
    });

    if (error) {
      console.error("Resend email send error (appointments):", error);
      return res.status(500).json({ success: false, error: "Failed to send appointment request" });
    }

    return res.status(200).json({ success: true, message: "Appointment request sent successfully", emailId: data?.id });
  } catch (err) {
    console.error("Appointments API error:", err);
    if (err instanceof z.ZodError) {
      return res.status(400).json({ success: false, error: "Invalid appointment data", details: err.errors });
    }
    return res.status(500).json({ success: false, error: "Failed to process appointment request" });
  }
}
