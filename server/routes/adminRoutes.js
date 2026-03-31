const router = require("express").Router();
const Program = require("../models/Program");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  addProgram,
  getPrograms,
  deleteProgram,
  getApplications,
  deleteApplication,
  getContacts,
  deleteContact
} = require("../controllers/adminController");

// Programs
router.post("/program", authMiddleware, adminMiddleware, addProgram);
router.get("/programs", getPrograms);
router.delete("/program/:id", authMiddleware, adminMiddleware, deleteProgram);

// Applications
router.get("/applications", authMiddleware, adminMiddleware, getApplications);
router.delete("/applications/:id", authMiddleware, adminMiddleware, deleteApplication);

// Contacts
router.get("/contacts", authMiddleware, adminMiddleware, getContacts);
router.delete("/contacts/:id", authMiddleware, adminMiddleware, deleteContact);

module.exports = router;