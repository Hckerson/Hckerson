import transporter from "@/app/services/nodemailer/connection";
import nodemailer from "nodemailer";

export default async function sendEmail({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) {
  await transporter.verify();
  console.log("Server is ready to take our messages");
  try {
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: message, // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return {
      success: true,
      messageID: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
    };
  } catch (err) {
    console.error("Error while sending mail", err);
    return {
      success: false,
    };
  }
}
