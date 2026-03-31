const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", ProgramSchema);