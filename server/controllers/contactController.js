const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {

    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newMessage = new Contact({
      name,
      phone,
      message
    });

    await newMessage.save();

    res.json({
      message: "Message saved successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};