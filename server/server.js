const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const adminRoutes = require("./routes/adminRoutes");
const programRoutes = require("./routes/programRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

// DB
connectDB();

// ✅ CORS FIX (FINAL)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// ✅ Preflight fix
//app.options("*", cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/apply", applicationRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 