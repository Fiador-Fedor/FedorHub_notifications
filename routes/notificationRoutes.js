// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();

// Importing the controller that handles the notifications
const { getNotifications } = require('../controllers/notificationController');

// Route to get notifications for the logged-in user
router.get('/notifications', getNotifications);

module.exports = router;

router.post("/send-email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const mailOptions = {
      to,
      from: process.env.EMAIL_USER,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Sending Error:", error.message);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;