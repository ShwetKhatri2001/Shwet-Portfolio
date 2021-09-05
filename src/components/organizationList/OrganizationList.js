import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className="organizations-inline" name={logo["login"]}>
                    <img
                      className="organizations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
