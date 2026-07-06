import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Allow POST only
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const { name, email, message, company } = body;

    // Honeypot: real visitors never see/fill this field, bots usually do
    if (company) {
      return res.status(200).json({
        success: true,
      });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Please fill all required fields.",
      });
    }

    // Email to your company
    await resend.emails.send({
      from: "Applus Properties <noreply@applusproperties.com>",
      to: "info@applusproperties.com",
      replyTo: email,
      subject: `🏡 New Website Inquiry from ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px">

        <div style="max-width:700px;margin:auto;background:#ffffff;padding:40px;border-radius:12px">

          <h2 style="margin-top:0;color:#111">
            New Contact Form Submission
          </h2>

          <hr style="border:none;border-top:1px solid #eee;margin:25px 0"/>

          <p><strong>Name</strong></p>
          <p>${name}</p>

          <p><strong>Email</strong></p>
          <p>${email}</p>

          <p><strong>Message</strong></p>

          <div
          style="
          background:#fafafa;
          padding:20px;
          border-left:4px solid #8ddc6e;
          ">
          ${message.replace(/\n/g, "<br/>")}
          </div>

          <hr style="border:none;border-top:1px solid #eee;margin:30px 0"/>

          <p style="font-size:13px;color:#888">
            Sent from applusproperties.com
          </p>

        </div>

      </div>
      `,
    });

    // Auto reply to visitor
    await resend.emails.send({
      from: "Applus Properties <noreply@applusproperties.com>",
      to: email,
      subject: "We've received your inquiry",

      html: `
      <div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px">

      <div style="max-width:700px;margin:auto;background:white;padding:40px;border-radius:12px">

      <h2>Hello ${name},</h2>

      <p>
      Thank you for contacting
      <strong>Applus Properties.</strong>
      </p>

      <p>
      We have successfully received your message.
      One of our consultants will get back to you shortly.
      </p>

      <br/>

      <p>
      Regards,
      </p>

      <strong>Applus Properties</strong>

      </div>

      </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}