import React, { Component } from "react";
import "./PullRequests.css";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";

class PullRequests extends Component {
  render() {
    return (
      <div className="pull-request-body-div">
        {pullRequestsData["data"].map((pullRequest) => {
          return <PullRequestCard pullRequest={pullRequest} />;
        })}
      </div>
    );
  }
}

export default PullRequests;
