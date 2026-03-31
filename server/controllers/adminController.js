const Program = require("../models/Program");
const Application = require("../models/Application");
const Contact = require("../models/Contact");

// =========================
// PROGRAMS
// =========================

// Add Program
exports.addProgram = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required"
      });
    }

    const program = new Program({
      title,
      description,
      image
    });

    await program.save();

    res.status(201).json({
      message: "Program added successfully",
      program
    });
  } catch (error) {
    console.error("Add program error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// Get All Programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find().sort({ createdAt: -1 });

    res.json(programs);
  } catch (error) {
    console.error("Get programs error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// Delete Program
exports.deleteProgram = async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);

    if (!deletedProgram) {
      return res.status(404).json({
        message: "Program not found"
      });
    }

    res.json({
      message: "Program deleted successfully"
    });
  } catch (error) {
    console.error("Delete program error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// =========================
// APPLICATIONS
// =========================

// Get All Applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    console.error("Get applications error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// Delete Application
exports.deleteApplication = async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.id);

    if (!deletedApplication) {
      return res.status(404).json({
        message: "Application not found"
      });
    }

    res.json({
      message: "Application deleted successfully"
    });
  } catch (error) {
    console.error("Delete application error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// =========================
// CONTACT MESSAGES
// =========================

// Get All Contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact message not found"
      });
    }

    res.json({
      message: "Contact message deleted successfully"
    });
  } catch (error) {
    console.error("Delete contact error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
};