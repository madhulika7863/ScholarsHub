import React from "react";
import "./ProgramPage.css"
import { useNavigate } from "react-router-dom";

function Phd() {
  const navigate = useNavigate()
  return (
    <div className="program-page">

      <h1>Doctor of Philosophy (PhD)</h1>

      <p className="program-desc">
        PhD is a research-based doctoral program focused on innovation,
        advanced research, and academic development.
      </p>

      <div className="program-details">

        <div className="detail-card">
          <h3>Duration</h3>
          <p>3 - 5 Years</p>
        </div>

        <div className="detail-card">
          <h3>Eligibility</h3>
          <p>M.Tech / Master's Degree</p>
        </div>

        <div className="detail-card">
          <h3>Research Areas</h3>
          <p>AI, Robotics, Data Science</p>
        </div>

      </div>

      <button className="apply-btn" onClick={()=>navigate("/apply")}>Apply Now</button>

    </div>
  );
}

export default Phd;