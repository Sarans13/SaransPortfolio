import React from "react";
import "../styles/NavigationBar.css";
import {
  MdRoundaboutRight,
  MdAssuredWorkload,
  MdContactPage,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";

function NavigationBar({ onNavClick, activeIndex }) {
  return (
    <div className="navigationBar">
      <div className="navHead">
        <span className="hideOnMobile">My Journey</span>
      </div>
      <div className="navBody">
        <div
          className={`navItem ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => onNavClick(1)}
        >
          <MdRoundaboutRight />
          <span className="hideOnMobile">Who Am I?</span>
        </div>
        <div
          className={`navItem ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => onNavClick(2)}
        >
          <GiSkills />
          <span className="hideOnMobile">My Skills</span>
        </div>
        <div
          className={`navItem ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => onNavClick(3)}
        >
          <MdAssuredWorkload />
          <span className="hideOnMobile">My Internships</span>
        </div>
        <div
          className={`navItem ${activeIndex === 4 ? "active" : ""}`}
          onClick={() => onNavClick(4)}
        >
          <GoProject />
          <span className="hideOnMobile">My Projects</span>
        </div>
        <div
          className={`navItem ${activeIndex === 5 ? "active" : ""}`}
          onClick={() => onNavClick(5)}
        >
          <MdContactPage />
          <span className="hideOnMobile">My Contact</span>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
