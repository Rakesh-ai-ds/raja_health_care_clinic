import { Resend } from "resend";
import { appointmentSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const body = req.body;
    const appointmentData = appointmentSchema.parse(body);

    const timeSlot = {
      morning: "Morning (9:00 AM - 12:00 PM)",
      afternoon: "Afternoon (12:00 PM - 3:00 PM)",
      evening: "Evening (3:00 PM - 6:00 PM)",
    }[appointmentData.preferredTime];

    if (!process.env.RESEND_API_KEY) {
      console.error("Appointments API: RESEND_API_KEY is missing.");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const notifyTo = process.env.NOTIFY_TO || "rajahealthcaraclinic@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "RAJA Health Care <onboarding@resend.dev>",
      to: [notifyTo],
      replyTo: appointmentData.email,
      subject: `New Appointment Request from ${appointmentData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Appointment Request
          </h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Patient Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Full Name:</td><td>${appointmentData.fullName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td><td>${appointmentData.email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td><td>${appointmentData.phone}</td></tr>
            </table>
          </div>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Appointment Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Date:</td><td>${new Date(appointmentData.preferredDate).toLocaleDateString()}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Time:</td><td>${timeSlot}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service:</td><td>${appointmentData.service}</td></tr>
            </table>
          </div>
          <div style="margin-top: 30px; font-size: 14px; color: #64748b;">
            <p>Please contact the patient to confirm.</p>
          </div>
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
