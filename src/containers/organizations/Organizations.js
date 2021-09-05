import React, { Component } from "react";
import "./Organizations.css";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div id="organizations">
        <div className="organizations-header-div">
            <h1 className="organizations-header" style={{ color: theme.text }}>
              Contributed Organizations
            </h1>
        </div>
        <OrganizationList logos={OrganizationsData["data"]} />
      </div>
    );
  }
}

export default Organizations;
