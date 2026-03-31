
import React, { useEffect, useState } from "react";
import "./Program.css";
import { Link } from "react-router-dom";
import API from "../../api/axios";

import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

function Program() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await API.get("/programs");
        console.log("API Response:", res.data);

        // ✅ Ensure programs is always an array
        if (Array.isArray(res.data)) {
          setPrograms(res.data);
        } else if (res.data.programs) {
          setPrograms(res.data.programs);
        } else {
          setPrograms([]);
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
        setPrograms([]); // safety fallback
      }
    };

    fetchPrograms();
  }, []);

  // Fallback images/icons
  const programImages = {
    BTech: program_1,
    MTech: program_2,
    PhD: program_3,
  };

  const programIcons = {
    BTech: program_icon_1,
    MTech: program_icon_2,
    PhD: program_icon_3,
  };

  return (
    <div className="programs">
      {Array.isArray(programs) && programs.length > 0 ? (
        programs.map((program) => (
          <Link
            to={`/${program.slug}`}
            className="program"
            key={program._id}
          >
            <img
              src={programImages[program.slug] || program_1}
              alt={program.name}
            />
            <div className="caption">
              <img
                src={programIcons[program.slug] || program_icon_1}
                alt={program.name}
              />
              <p>{program.name}</p>
            </div>
          </Link>
        ))
      ) : (
        <>
          <Link to="/btech" className="program">
            <img src={program_1} alt="BTech" />
            <div className="caption">
              <img src={program_icon_1} alt="BTech Icon" />
              <p>Bachelors of Technology</p>
            </div>
          </Link>

          <Link to="/mtech" className="program">
            <img src={program_2} alt="MTech" />
            <div className="caption">
              <img src={program_icon_2} alt="MTech Icon" />
              <p>Masters of Technology</p>
            </div>
          </Link>

          <Link to="/phd" className="program">
            <img src={program_3} alt="PhD" />
            <div className="caption">
              <img src={program_icon_3} alt="PhD Icon" />
              <p>PhD Program</p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

export default Program;
