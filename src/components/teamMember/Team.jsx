// src/Team.js
import React from "react";
import "./Team.css";
import { teamMembers } from "../../constant/constant.js";
import Heading from "../utiles/Heading.jsx";

const Team = () => {
  return (
    <div className=" container">
      <Heading
        title={"Our Expert Team Member"}
        details={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
      />
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-item">
            <img src={member.image} alt={member.name} />
            <div className="team-item-overlay">
              <div className="team-item-text">
                <h3>{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
