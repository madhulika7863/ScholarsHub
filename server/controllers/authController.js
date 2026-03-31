const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async(req,res)=>{

try{

const {name,email,password} = req.body

const hashed = await bcrypt.hash(password,10)

const user = new User({
name,
email,
password:hashed
})

await user.save()

res.json({message:"User Registered"})

}
catch(err){
res.status(500).json(err)
}

}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email,role: user.role},
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};