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
    const contactData = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is missing!");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }

    const resend = new Resend(apiKey);
    const recipientEmail = "rajahealthcareclinic@gmail.com";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">
                RAJA Health Care
              </h1>
              <p style="color: #a8c5e2; margin: 8px 0 0 0; font-size: 14px; letter-spacing: 1px;">
                PHYSIOTHERAPY CLINIC
              </p>
            </td>
          </tr>

          <!-- Accent Bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #10b981 0%, #34d399 100%); height: 5px;"></td>
          </tr>

          <!-- Title Section -->
          <tr>
            <td style="padding: 35px 40px 20px 40px; text-align: center;">
              <div style="display: inline-block; background-color: #ecfdf5; padding: 12px 25px; border-radius: 30px; margin-bottom: 15px;">
                <span style="color: #065f46; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">New Contact Message</span>
              </div>
              <h2 style="color: #1e3a5f; margin: 15px 0 5px 0; font-size: 24px; font-weight: 600;">
                ${contactData.subject}
              </h2>
              <p style="color: #6b7c93; margin: 0; font-size: 14px;">
                Received on ${new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 10px 40px 25px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 10px; overflow: hidden;">
                <tr>
                  <td style="background-color: #1e3a5f; padding: 12px 20px;">
                    <h3 style="color: #ffffff; margin: 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      Contact Information
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e9ef;">
                          <span style="color: #6b7c93; font-size: 13px; display: block; margin-bottom: 4px;">Name</span>
                          <span style="color: #1e3a5f; font-size: 15px; font-weight: 600;">${contactData.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e5e9ef;">
                          <span style="color: #6b7c93; font-size: 13px; display: block; margin-bottom: 4px;">Email Address</span>
                          <a href="mailto:${contactData.email}" style="color: #2d5a87; font-size: 15px; font-weight: 600; text-decoration: none;">${contactData.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0;">
                          <span style="color: #6b7c93; font-size: 13px; display: block; margin-bottom: 4px;">Phone Number</span>
                          <a href="tel:${contactData.phone}" style="color: #2d5a87; font-size: 15px; font-weight: 600; text-decoration: none;">${contactData.phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 25px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-radius: 10px; border-left: 4px solid #10b981; overflow: hidden;">
                <tr>
                  <td style="padding: 20px;">
                    <span style="color: #6b7c93; font-size: 13px; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Message</span>
                    <p style="color: #1e3a5f; font-size: 15px; margin: 0; line-height: 1.7; white-space: pre-wrap;">${contactData.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Required -->
          <tr>
            <td style="padding: 0 40px 30px 40px; text-align: center;">
              <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 20px; border-radius: 10px; border: 1px solid #a7f3d0;">
                <p style="color: #065f46; font-size: 14px; margin: 0; font-weight: 500;">
                  Please respond to this inquiry within 24 hours.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1e3a5f; padding: 25px 40px; text-align: center;">
              <p style="color: #a8c5e2; font-size: 13px; margin: 0 0 10px 0;">
                RAJA Health Care Physiotherapy Clinic
              </p>
              <p style="color: #6b8cae; font-size: 12px; margin: 0;">
                Phone: +91 76959 91173
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "RAJA Health Care Clinic <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `Contact Form: ${contactData.subject}`,
      html: emailHtml,
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
