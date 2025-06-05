import nodemailer from "nodemailer"
import 'dotenv/config'


export default function sendEmail(){
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });
}