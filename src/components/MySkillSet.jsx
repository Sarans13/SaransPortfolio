import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiMysql,
  SiCisco,
  SiGoogle,
  SiGoldmansachs,
  SiSalesforce,
  SiAmazon,
} from "react-icons/si";
import CanvaIcon from "../Images/Canva.svg";
import FigmaIcon from "../Images/Figma.svg";
import PWCIcon from "../Images/Pwc.svg";
import IbmIcon from "../Images/ibm.svg";
import Modal from "./Modal";
import CentralModal from "./CentralModal";
import "../styles/MySkillSet.css";

function MySkillSet({ activeIndex }) {
  const [modalData, setModalData] = useState({ show: false, text: "" });
  const [persistentModal, setPersistentModal] = useState(false);
  const [activeRingSet, setActiveRingSet] = useState("languages");
  const [centralModalData, setCentralModalData] = useState({
    show: false,
    text: "Thank You so much. Do Hover on the orbits, They show my journey. Click on the Certifications To know about what I did.",
  });
  useEffect(() => {
    if (activeIndex === 2) {
      setCentralModalData((prevState) => ({ ...prevState, show: true }));
    }
  }, [activeIndex]);
  const handleCentralModalClose = () => {
    setCentralModalData((prevState) => ({ ...prevState, show: false }));
  };
  const ringMessages = {
    languages: {
      0: "Lastly, completed frontend frameworks, relational database.",
      1: "Learnt authentication, non-relational database and started programming.",
      2: "Started backend and frameworks to present my work well.",
      3: "Started with basics and learnt version control for deployment.",
    },
    certifications: {
      0: "Specialized in Data Science, AI, and Web Development through exclusive IBM courses.",
      1: "Certified in Cisco CCNA series, Cybersecurity, Python, and Packet Tracer.",
      2: "Completed IT Fundamentals, Java, Cloud, and Web Development with PWC Launchpad.",
      3: "Completed hands-on Salesforce Trailhead modules, enhancing CRM and cloud skills.",
      4: "Graduated from AWS Academy Cloud Foundations, mastering cloud deployment and architecture.",
      5: "Learned advanced database querying and management at MongoDB University.",
      6: "Developed software engineering skills through Goldman Sachs' Virtual Experience.",
      7: "Certified in Cybersecurity through Google, strengthening my expertise in digital security.",
    },
  };

  const handleHover = (ring, event) => {
    if (!persistentModal) {
      setModalData({
        show: true,
        text: ringMessages[activeRingSet][ring],
      });
    }
  };

  const handleLeave = () => {
    if (!persistentModal) {
      setModalData({ show: false, text: "" });
    }
  };

  const handleClick = (ring, event) => {
    setModalData({
      show: true,
      text: ringMessages[activeRingSet][ring],
    });
    setPersistentModal(true);
  };

  const handleClose = () => {
    setModalData({ show: false, text: "" });
    setPersistentModal(false);
  };
  return (
    <div className="mySkillSet">
      <div className="heading">
        <div
          className={`tab ${activeRingSet === "languages" ? "active" : ""}`}
          onClick={() => setActiveRingSet("languages")}
        >
          Languages I'm Proficient In
        </div>
        <div
          className={`tab ${
            activeRingSet === "certifications" ? "active" : ""
          }`}
          onClick={() => setActiveRingSet("certifications")}
        >
          Certifications I've Done
        </div>
      </div>
      <div
        className={`orbit ${
          activeRingSet === "certifications" ? "notRotate" : ""
        }`}
      >
        <ul className="orbit-wrap">
          <li className="orbit-center">
          {activeRingSet === "languages" ? (
            <FaCode className="orbit-center__icon" color="white" />
          ) : (
            <div>
              Click or hover on the organization's logos to see the certifications they provided me!
            </div>
          )}
          </li>
          {activeRingSet === "languages" && (
            <>
              <li>
                <ul
                  className="ring-0"
                  onMouseEnter={(event) => handleHover(0, event)}
                  onMouseLeave={handleLeave}
                  onClick={(event) => handleClick(0, event)}
                >
                  <li>
                    <SiCplusplus
                      className="orbit-icon"
                      style={{ color: "#00599C" }}
                    />
                  </li>
                  <li>
                    <FaReact
                      className="orbit-icon"
                      style={{ color: "#61DAFB" }}
                    />
                  </li>
                  <li>
                    <SiMysql
                      className="orbit-icon"
                      style={{ color: "#003B57" }}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <ul
                  className="ring-1"
                  onMouseEnter={(event) => handleHover(1, event)}
                  onMouseLeave={handleLeave}
                  onClick={(event) => handleClick(1, event)}
                >
                  <li>
                    <SiMongodb
                      className="orbit-icon"
                      style={{ color: "#47A248" }}
                    />
                  </li>
                  <li>
                    <SiFirebase
                      className="orbit-icon"
                      style={{ color: "#FFCA28" }}
                    />
                  </li>
                  <li>
                    <SiC className="orbit-icon" style={{ color: "#2f3b96" }} />
                  </li>
                </ul>
              </li>
              <li>
                <ul
                  className="ring-2"
                  onMouseEnter={(event) => handleHover(2, event)}
                  onMouseLeave={handleLeave}
                  onClick={(event) => handleClick(2, event)}
                >
                  <li>
                    <img src={CanvaIcon} className="orbit-icon" alt="canva" />
                  </li>
                  <li>
                    <img src={FigmaIcon} className="orbit-icon" alt="figma" />
                  </li>
                  <li>
                    <FaJs className="orbit-icon" style={{ color: "#F7DF1E" }} />
                  </li>
                  <li>
                    <FaNodeJs
                      className="orbit-icon"
                      style={{ color: "#339933" }}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <ul
                  className="ring-3"
                  onMouseEnter={(event) => handleHover(3, event)}
                  onMouseLeave={handleLeave}
                  onClick={(event) => handleClick(3, event)}
                >
                  <li>
                    <FaHtml5
                      className="orbit-icon"
                      style={{ color: "#E34C26" }}
                    />
                  </li>
                  <li>
                    <FaCss3Alt
                      className="orbit-icon"
                      style={{ color: "#1572B6" }}
                    />
                  </li>
                  <li>
                    <FaGithub
                      className="orbit-icon"
                      style={{ color: "#181717" }}
                    />
                  </li>
                </ul>
              </li>
            </>
          )}
          {activeRingSet === "certifications" && (
            <>
              <li>
                <ul className="ring-1">
                  <li
                    onMouseEnter={(event) => handleHover(0, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(0, event)}
                  >
                    <img src={IbmIcon} alt="IBM Logo" className="orbit-icon" />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(1, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(1, event)}
                  >
                    <SiCisco
                      className="orbit-icon"
                      style={{ color: "#1BA0D7" }}
                    />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(2, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(2, event)}
                  >
                    <img src={PWCIcon} alt="pwcIcon" className="orbit-icon" />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(3, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(3, event)}
                  >
                    <SiSalesforce
                      className="orbit-icon"
                      style={{ color: "#00A1E0" }}
                    />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(4, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(4, event)}
                  >
                    <SiAmazon
                      className="orbit-icon"
                      style={{ color: "#000000" }}
                    />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(5, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(5, event)}
                  >
                    <SiMongodb
                      className="orbit-icon"
                      style={{ color: "#47A248" }}
                    />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(6, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(6, event)}
                  >
                    <SiGoldmansachs
                      className="orbit-icon"
                      style={{ color: "#E8A60C" }}
                    />
                  </li>
                  <li
                    onMouseEnter={(event) => handleHover(7, event)}
                    onMouseLeave={handleLeave}
                    onClick={(event) => handleClick(7, event)}
                  >
                    <SiGoogle
                      className="orbit-icon"
                      style={{ color: "#4285F4" }}
                    />
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </div>
      <Modal
        show={modalData.show}
        message={modalData.text}
        onClose={persistentModal ? handleClose : null}
      />
      <CentralModal
        show={centralModalData.show}
        message={centralModalData.text}
        onClose={handleCentralModalClose}
      />
    </div>
  );
}

export default MySkillSet;
