import React, { useState } from "react";
import PullRequests from "../pullRequests/PullRequests";
import Issues from "../issues/Issues";
import "./ContributionList.css";

const ContributionList = ({ theme }) => {
  const [tab, setTab] = useState("pr");

  console.log(tab);

  return (
    <div className="contribution-container">
      <div className="tabs-container">
        <button
          className="tab"
          onClick={() => setTab("pr")}
          style={{
            color: theme.text,
            background: tab === "pr" && theme.highlight,
            boxShadow: `${theme.secondaryText} 0 10px 40px ${
              tab === "pr" ? "-25px" : "-30px"
            }`,
          }}
        >
          <h1 className="tab-title" style={{ color: theme.text }}>
            Pull Requests
          </h1>
        </button>
        <button
          className="tab"
          onClick={() => setTab("issue")}
          style={{
            color: theme.text,
            borderLeft: "none",
            background: tab === "issue" && theme.highlight,
            boxShadow: `${theme.secondaryText} 0 10px 40px ${
              tab === "issue" ? "-25px" : "-30px"
            }`,
          }}
        >
          <h1 className="tab-title" style={{ color: theme.text }}>
            Issues
          </h1>
        </button>
      </div>
      {tab === "pr" ? <PullRequests theme={theme} /> : <Issues theme={theme} />}
    </div>
  );
};

export default ContributionList;
