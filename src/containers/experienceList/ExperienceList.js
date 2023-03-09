import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { Fade } from "react-reveal";
import "./ExperienceList.css";

const ExperienceAccordion = ({ sections, theme }) => {
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="experience-container">
        {sections.map((section) => {
          return (
            <>
              <h1 className="experience-heading">{section["title"]}</h1>
              <div className="experience-cards-div">
                {section["experiences"].map((exp, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      cardInfo={{
                        title: exp.title,
                        company: exp.company,
                        company_url: exp.company_url,
                        logo_path: exp.logo_path,
                        description: exp.description,
                        duration: exp.duration,
                        location: exp.location,
                        color: exp.color,
                      }}
                      theme={theme}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </Fade>
  );
};

export default ExperienceAccordion;
