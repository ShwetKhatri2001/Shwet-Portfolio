import React, { Component } from "react";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Figma from "../../assets/lottie/figma";

export default class DesignImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={Figma} />
    );
  }
}
