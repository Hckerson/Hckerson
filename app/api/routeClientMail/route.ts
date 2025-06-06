import sendEmail from "@/lib/actions/send_email.";

export async function POST(request: Request) {
  console.log("Starting message routing");
  try {
    const message_body = await request.json();
    const body = message_body.control._formValues;
    const { name, email, subject, message } = body;

    const payload = {
      to: "hckerson@gmail.com",
      subject: subject,
      message: `Mail from ${name} <br/> ${message} <br/> Sent from ${email}`,
    };

    const result = await sendEmail(payload);

    if (result) {
      console.log("Email sent successfully:", result.messageId);
      return new Response(
        JSON.stringify({
          success: true,
          messageId: result.messageId,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error in route handler:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
