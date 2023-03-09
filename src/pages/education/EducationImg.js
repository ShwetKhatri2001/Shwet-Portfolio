import React, { Component } from "react";
import Graduate from "../../assets/lottie/graduate";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class EducationImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={Graduate} />
    );
  }
}
