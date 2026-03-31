import React from "react";
import './ProgramPage.css'
import { useNavigate } from "react-router-dom";


function Btech() {

  const navigate = useNavigate()
  return (
    <div className="program-page">

      <h1>Bachelor of Technology (B.Tech)</h1>

      <p className="program-desc">
        B.Tech is a 4-year undergraduate engineering program that focuses on
        practical and theoretical knowledge in technology and engineering
        fields.
      </p>

      <div className="program-details">

        <div className="detail-card">
          <h3>Duration</h3>
          <p>4 Years</p>
        </div>

        <div className="detail-card">
          <h3>Eligibility</h3>
          <p>12th with Physics, Chemistry & Maths</p>
        </div>

        <div className="detail-card">
          <h3>Popular Branches</h3>
          <p>CSE, IT, Mechanical, Civil</p>
        </div>

      </div>

      <button className="apply-btn" onClick={()=>navigate("/apply")}> Apply Now</button>

    </div>
  );
}

export default Btech;