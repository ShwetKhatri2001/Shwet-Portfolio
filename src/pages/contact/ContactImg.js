import React, { Component } from "react";
import Contact from "../../assets/lottie/contact";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class ContactImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={Contact} />
    );
  }
}
