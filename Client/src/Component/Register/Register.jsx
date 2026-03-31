import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import './Register.css'

function Register() {

const [formData, setFormData] = useState({
name: "",
email: "",
password: ""
});

const navigate = useNavigate();

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {

await API.post("/auth/register", formData);

alert("Registered successfully");

// 🔥 go to login
navigate("/");

} catch (error) {

alert(error.response?.data?.message || "Register failed");

}

};

return (
  <div className="register-page">
    <div className="register-container">

      <h2>Create Account</h2>
      <p className="register-subtitle">Join us and start your journey 🚀</p>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

      </form>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>

    </div>
  </div>
);

}

export default Register;