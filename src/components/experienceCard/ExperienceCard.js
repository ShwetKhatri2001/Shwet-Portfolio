import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ cardInfo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const GetDescBullets = ({ description }) => {
    const descBullets = description.split(".");

    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle" style={{ color: theme.text }}>
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div
      className="experience-card"
      onClick={() => openRepoinNewTab(cardInfo.company_url)}
      style={{ backgroundColor: `${cardInfo.color}25` }}
    >
      <div style={{ background: cardInfo.color }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin="anonymous"
          className="experience-roundedimg"
          src={require(`../../assets/images/${cardInfo["logo_path"]}`).default}
          alt={cardInfo.company}
        />
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-title" style={{ color: theme.text }}>
          {cardInfo.title}
        </h5>
        <h5
          className="experience-text-info"
          style={{ color: theme.secondaryText }}
        >
          {cardInfo.duration}
        </h5>
        <h5
          className="experience-text-info"
          style={{ color: theme.secondaryText }}
        >
          {cardInfo.location}
        </h5>
        {/* <p
          className="subTitle experience-text-desc"
          style={{ color: theme.text }}
        >
          {cardInfo.description}
        </p> */}
        <ul>
          <GetDescBullets description={cardInfo.description} />
        </ul>
      </div>
    </div>
  );
}

// descBullets: [
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
// ]
