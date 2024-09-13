import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  // Configure the email transport using the default SMTP transport and Gmail settings
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // Your Gmail address
      pass: process.env.EMAIL_APP_PASSWORD, // Your Gmail app password
    },
  });

  // Verify the connection before sending the email
  try {
    await transporter.verify();

    const mailData = {
      from: `"${name}" <${email}>`, // Sender address
      to: "milosdraskovic1282@gmail.com", // List of receivers
      subject: "Fixdemonium Contact Form Submission", // Subject line
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

    // Return a successful response
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Return an error response
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
