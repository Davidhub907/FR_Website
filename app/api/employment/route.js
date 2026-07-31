import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

const allowedPositions = new Set([
  "Restoration Technician",
  "Contents Technician",
  "Office or Administrative",
  "General Employment Application",
  "Other",
]);

const allowedAvailability = new Set([
  "Full-time",
  "Part-time",
  "Seasonal",
  "Flexible",
]);

const allowedResumeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const allowedResumeExtensions = new Set(["pdf", "doc", "docx"]);

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

function cleanFilename(filename) {
  return filename
    .replaceAll("\\", "_")
    .replaceAll("/", "_")
    .replace(/[^\w.\-() ]/g, "_")
    .slice(0, 150);
}

export async function POST(request) {
  try {
    const recipient =
      process.env.EMPLOYMENT_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL ||
      !recipient
    ) {
      console.error("Missing employment email environment variables.");

      return NextResponse.json(
        { error: "The employment form is not configured." },
        { status: 500 },
      );
    }

    // Reject an oversized request before processing the uploaded file.
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_RESUME_SIZE) {
      return NextResponse.json(
        { error: "The uploaded résumé must be smaller than 4 MB." },
        { status: 413 },
      );
    }

    const formData = await request.formData();

    const fullName = clean(formData.get("fullName"));
    const email = clean(formData.get("email"));
    const phone = clean(formData.get("phone"));
    const position = clean(formData.get("position"));
    const availability = clean(formData.get("availability"));
    const experience = clean(formData.get("experience"));
    const additionalMessage = clean(formData.get("message"));
    const website = clean(formData.get("website"));
    const turnstileToken = clean(formData.get("cf-turnstile-response"));

    const resume = formData.get("resume");

    // Honeypot: bots often fill this hidden field.
    if (website) {
      return NextResponse.json({ success: true });
    }

    const turnstileIsValid = await verifyTurnstile(
      turnstileToken,
      "employment_application",
    );

    if (!turnstileIsValid) {
      return NextResponse.json(
        {
          error:
            "Security verification failed. Please refresh the page and try again.",
        },
        { status: 400 },
      );
    }

    if (!fullName || !email || !phone || !position || !availability) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (
      fullName.length > 100 ||
      email.length > 254 ||
      phone.length > 40 ||
      experience.length > 3000 ||
      additionalMessage.length > 3000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    if (!allowedPositions.has(position)) {
      return NextResponse.json(
        { error: "Please select a valid position." },
        { status: 400 },
      );
    }

    if (!allowedAvailability.has(availability)) {
      return NextResponse.json(
        { error: "Please select valid availability." },
        { status: 400 },
      );
    }

    const attachments = [];

    const hasResume =
      resume &&
      typeof resume !== "string" &&
      typeof resume.arrayBuffer === "function" &&
      resume.size > 0;

    if (hasResume) {
      if (resume.size > MAX_RESUME_SIZE) {
        return NextResponse.json(
          { error: "The uploaded résumé must be smaller than 4 MB." },
          { status: 400 },
        );
      }

      const extension = resume.name.split(".").pop()?.toLowerCase();

      if (
        !extension ||
        !allowedResumeExtensions.has(extension) ||
        !allowedResumeTypes.has(resume.type)
      ) {
        return NextResponse.json(
          { error: "The résumé must be a PDF, DOC, or DOCX file." },
          { status: 400 },
        );
      }

      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        filename: cleanFilename(resume.name) || `resume.${extension}`,
        content: resumeBuffer,
      });
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safePosition = escapeHtml(position);
    const safeAvailability = escapeHtml(availability);
    const safeExperience = escapeHtml(experience || "Not provided");
    const safeAdditionalMessage = escapeHtml(
      additionalMessage || "Not provided",
    );

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [recipient],
      replyTo: email,
      subject: `New employment application: ${position}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
          <h1 style="font-size: 24px; margin-bottom: 8px;">
            New Employment Application
          </h1>

          <p style="color: #555;">
            A new application was submitted through the Frontier Restoration website.
          </p>

          <table style="width: 100%; max-width: 650px; border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Name</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safeFullName}
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
                  <strong>Phone</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Position</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safePosition}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Availability</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${safeAvailability}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <strong>Résumé</strong>
                </td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  ${hasResume ? "Attached" : "Not provided"}
                </td>
              </tr>
            </tbody>
          </table>

          <h2 style="font-size: 18px; margin-top: 24px;">
            Relevant work experience
          </h2>

          <div style="max-width: 650px; padding: 14px; background: #f5f5f5; white-space: pre-wrap;">
            ${safeExperience}
          </div>

          <h2 style="font-size: 18px; margin-top: 24px;">
            Additional information
          </h2>

          <div style="max-width: 650px; padding: 14px; background: #f5f5f5; white-space: pre-wrap;">
            ${safeAdditionalMessage}
          </div>
        </div>
      `,
      text: `
New Employment Application

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Position: ${position}
Availability: ${availability}
Résumé: ${hasResume ? "Attached" : "Not provided"}

Relevant work experience:
${experience || "Not provided"}

Additional information:
${additionalMessage || "Not provided"}
      `.trim(),
    });

    if (error) {
      console.error("Resend employment error:", error);

      return NextResponse.json(
        { error: "Your application could not be submitted." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Employment route error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
