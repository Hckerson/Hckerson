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
  try {
    // Verify the connection first
    await transporter.verify();
    console.log("Server is ready to take our messages");

    // Send the email and wait for the result
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: to,
      subject: subject,
      text: message,
      html: message,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return info; // Return the info object for better error handling
  } catch (err) {
    console.error("Error while sending mail:", err);
    throw err; // Re-throw the error to be caught by the route handler
  }
}
