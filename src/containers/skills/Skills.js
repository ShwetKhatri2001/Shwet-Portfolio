import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
