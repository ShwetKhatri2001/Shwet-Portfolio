import React, { Component } from "react";
import "./Issues.css";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    return (
      <div className="issues-body-div">
        {issuesData["data"].map((issue) => {
          return <IssueCard issue={issue} />;
        })}
      </div>
    );
  }
}

export default Issues;
