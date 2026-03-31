const Program = require("../models/Program");

// Add Program
exports.addProgram = async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();

    res.json({
      message: "Program added successfully",
      program
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Program
exports.deleteProgram = async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);

    res.json({
      message: "Program deleted"
    });
  } catch (error) {
    res.status(500).json(error);
  }
};