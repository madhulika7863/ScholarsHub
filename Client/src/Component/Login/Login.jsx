import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import './Login.css'
function Login() {

const [formData, setFormData] = useState({
email: "",
password: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {

const res = await API.post("/auth/login", formData);

localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));

if (res.data.user.role === "admin") {
  window.location.href = "/admin";
} else {
  window.location.href = "/";
}

} catch (error) {

alert(error.response?.data?.message || "Login failed");

}

};

return (
  <div className="login-page">
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p className="login-subtitle">Login to continue to your account</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  </div>
);

}

export default Login;