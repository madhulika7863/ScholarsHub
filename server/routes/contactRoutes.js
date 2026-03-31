const router = require("express").Router();
const Contact = require("../models/Contact");
const { sendMessage } = require("../controllers/contactController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware")

// User submits contact form
router.post("/", sendMessage);

// Admin views all contact messages
router.get("/", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;