import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  // Log to check if environment variables are correctly loaded
  console.log("EMAIL_USERNAME:", process.env.EMAIL_USERNAME);
  console.log("EMAIL_APP_PASSWORD:", process.env.EMAIL_APP_PASSWORD);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // Gmail address
      pass: process.env.EMAIL_APP_PASSWORD, // Gmail app password
    },
  });

  try {
    await transporter.verify();

    const mailData = {
      from: `"${name}" <${email}>`, // Sender address
      to: "milosdraskovic1282@gmail.com", // Receiver email
      subject: "Fixdemonium Contact Form Submission",
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Phone: </strong> ${phone}</p>
        <p><strong>Message: </strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailData);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
