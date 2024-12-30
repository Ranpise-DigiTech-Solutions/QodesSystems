import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "qodessystems.com",
      port: 465,
      secure: true,
      auth: {
        user: "admin@qodessystems.com",
        pass: "Bijoyaus@2025",
      },
    });

    const mailOptions = {
      from: '"Qodes Systems" <admin@qodessystems.com>',
      to: "adikrishna1972@gmail.com",
      subject: subject || "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send message" });
  }
}
