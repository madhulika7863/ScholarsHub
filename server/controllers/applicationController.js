const Application = require("../models/Application");

exports.applyForm = async (req, res) => {
  try {

    const { name, email, phone, course, message } = req.body;

    // basic validation
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const application = new Application({
      name,
      email,
      phone,
      course,
      message
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application
    });

  } catch (error) {
    console.error("Apply error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};