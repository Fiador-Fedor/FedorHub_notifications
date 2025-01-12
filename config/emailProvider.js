const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Ignore certificate validation
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const mailOptions = {
      from: `"FedorHub E-commerce Platform" <${process.env.EMAIL}>`,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}: ${subject}`);
  } catch (error) {
    console.error("Failed to send email:", error.message);
  }
};

module.exports = { sendEmail };
