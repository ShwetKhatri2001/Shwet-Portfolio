import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData } from "../../portfolio";

export default function Contact() {

  const { contactSection , addressSection, phoneSection} = contactPageData;

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactSection.title}</h1>
          <p className="subTitle contact-subtitle">{contactSection.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + phoneSection.number}>
              {phoneSection.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + phoneSection.email_address}
            >
              {phoneSection.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Shwet Working"
            src={require("../../assests/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
