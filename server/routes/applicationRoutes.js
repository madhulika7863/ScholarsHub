const router = require("express").Router();
const { applyForm } = require("../controllers/applicationController");
const authMiddleware = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/adminMiddleware")

// POST /api/apply
router.post("/", applyForm);
router.get("/", authMiddleware, adminMiddleware, async (req, res) => {
const applications = await Application.find();
res.json(applications);
});

module.exports = router;