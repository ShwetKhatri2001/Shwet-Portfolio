import React, { Component } from "react";
import Location from "../../assets/lottie/location";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class AddressImg extends Component {
  render() {
    return (
      <DisplayLottie animationData={Location} />
    );
  }
}
