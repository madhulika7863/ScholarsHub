const router = require("express").Router();
const {
addProgram,
getPrograms,
deleteProgram
} = require("../controllers/programController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/", authMiddleware, adminMiddleware, addProgram);
router.delete("/:id", authMiddleware, adminMiddleware, deleteProgram);

// Everyone can view
router.get("/", getPrograms);


module.exports = router;