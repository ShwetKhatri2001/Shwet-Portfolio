import React, { Component } from "react";
import Office from "../../assets/lottie/office";
import DisplayLottie from '../../components/displayLottie/DisplayLottie';

export default class ExperienceImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={Office}/>
    );
  }
}
