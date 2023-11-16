/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(true); // Set the initial state to true
  const menuItems = [
    {
      text: "Overview",
    },
    {
      text: "Onboarding",
    },
    {
      text: "Monitoring",
    },
    {
      text: "Flagging",
    },
    {
      text: "Source of Income",
    },
    {
      text: "UAR",
    },
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">

			{/* add logo of top header in SideNavBar */}
              {/* <img src="icons/Logo.svg" alt="" srcSet="" />

			   */}
			  
              <h2>LOGO HERE</h2>
            </div>
          )}
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={
                isExpanded ? "menu-item" : "menu-item menu-item-NX"
              }
              href="#"
            >
              <img className="menu-item-icon" src={icon} alt="" srcSet="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcSet=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Elon Musk</p>
              <p className="nav-footer-user-position">elon@twiiter.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavBar;
