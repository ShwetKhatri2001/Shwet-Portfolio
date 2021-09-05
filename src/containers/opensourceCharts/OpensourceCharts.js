import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="os-charts-header-div">
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Contributions
            </h1>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <IssueChart />
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
