import transporter from "@/app/services/nodemailer/connection";
import nodemailer from 'nodemailer'

export default async function sendEmail({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) {
  console.log(await transporter.verify());
  console.log("Server is ready to take our messages");
  const sendMail = async () => {
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
    } catch (err) {
      console.error("Error while sending mail", err);
    }
  };
  sendMail();
}
