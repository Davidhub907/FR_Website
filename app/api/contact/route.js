import { NextResponse } from "next/server";
import { Resend } from "resend";

const allowedServices = new Set([
  "Water damage",
  "Fire and smoke damage",
  "Mold remediation",
  "Sewer backup",
  "Content restoration",
  "Other",
]);

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.formData();

    const name = clean(formData.get("name"));
    const phone = clean(formData.get("phone"));
    const email = clean(formData.get("email"));
    const zip = clean(formData.get("zip"));
    const service = clean(formData.get("service"));
    const damage = clean(formData.get("damage"));

    // Honeypot field. Real visitors leave this blank.
    const website = clean(formData.get("website"));

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Name and phone number are required." },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      phone.length > 30 ||
      email.length > 254 ||
      zip.length > 15 ||
      damage.length > 3000
    ) {
      return NextResponse.json(
        { message: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (service && !allowedServices.has(service)) {
      return NextResponse.json(
        { message: "Please select a valid service." },
        { status: 400 },
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { message: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (zip && !/^\d{5}(?:-\d{4})?$/.test(zip)) {
      return NextResponse.json(
        { message: "Please enter a valid ZIP code." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email || "Not provided");
    const safeZip = escapeHtml(zip || "Not provided");
    const safeService = escapeHtml(service || "Not selected");
    const safeDamage = escapeHtml(damage || "Not provided");

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email || undefined,
      subject: `Emergency service request${service ? `: ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
          <h1 style="font-size: 24px; margin-bottom: 8px;">
            New Emergency Service Request
          </h1>

          <p style="color: #555;">
            A customer submitted the website emergency-service form.
          </p>

          <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Name</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Phone</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    <strong>Email</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                    ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>ZIP code</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safeZip}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Service</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safeService}
                </td>
              </tr>
            </tbody>
          </table>

          <h2 style="font-size: 18px; margin-top: 24px;">
            What happened?
          </h2>

          <div style="max-width: 600px; padding: 14px; background: #f5f5f5; white-space: pre-wrap;">
            ${safeDamage}
          </div>
        </div>
      `,
      text: `
New Emergency Service Request

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
ZIP code: ${zip || "Not provided"}
Service: ${service || "Not selected"}

What happened:
${damage || "Not provided"}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "The request could not be sent." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
