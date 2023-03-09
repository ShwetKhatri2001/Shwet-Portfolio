import React, { Component } from "react";
import WebDev from "../../assets/lottie/webdev";
import DisplayLottie from '../../components/displayLottie/DisplayLottie';

export default class FullStackImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={WebDev}/>
    );
  }
}
