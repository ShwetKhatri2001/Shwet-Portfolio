import React, { Component } from "react";
import Data from "../../assets/lottie/data";
import DisplayLottie from '../../components/displayLottie/DisplayLottie';

export default class DataScienceImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={Data}/>
    );
  }
}
