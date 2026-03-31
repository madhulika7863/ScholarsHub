const express = require("express");
const Application = require("../models/Application");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    // Save to DB
    const app = await Application.create(req.body);

    // Send Email
    await sendEmail(
      email,
      "Application Received 🎓",
      `Hello ${name},

Your application for ${course} has been received successfully.

Our team will contact you soon.

- ScholarsHub Team`
    );

    res.json({ message: "Application Submitted & Email Sent" });

  } catch (err) {
    console.error("Apply error:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;