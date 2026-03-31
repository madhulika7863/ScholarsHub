import React from "react";
import "./ProgramPage.css";
import { useNavigate } from "react-router-dom";

function Mtech() {
  const navigate = useNavigate()
  return (
    <div className="program-page">

      <h1>Master of Technology (M.Tech)</h1>

      <p className="program-desc">
        M.Tech is a 2-year postgraduate program that provides advanced
        knowledge in engineering and technology along with research exposure.
      </p>

      <div className="program-details">

        <div className="detail-card">
          <h3>Duration</h3>
          <p>2 Years</p>
        </div>

        <div className="detail-card">
          <h3>Eligibility</h3>
          <p>B.Tech / B.E in relevant field</p>
        </div>

        <div className="detail-card">
          <h3>Specializations</h3>
          <p>AI, Data Science, Cyber Security</p>
        </div>

      </div>

      <button className="apply-btn" onClick={()=>navigate("/apply")}>Apply Now</button>

    </div>
  );
}

export default Mtech;