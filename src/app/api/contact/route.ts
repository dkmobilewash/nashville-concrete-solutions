import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const body = (await request.json()) as ContactPayload;
  const { name, phone, email, service, city, message } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const recipient = process.env.CONTACT_EMAIL;
  if (!recipient) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const fromAddress = process.env.FROM_EMAIL || "onboarding@resend.dev";

  const fields: [string, string | undefined][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Service", service],
    ["City", city],
    ["Message", message],
  ];

  const htmlBody = `
    <h2>New Contact Form Submission from ${escapeHtml(name)}</h2>
    <ul>
      ${fields
        .filter(([, value]) => value)
        .map(([label, value]) => `<li><strong>${label}:</strong> ${escapeHtml(value as string)}</li>`)
        .join("")}
    </ul>
  `;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddress,
      to: recipient,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
