import React, { useState } from "react";
import "../styles/Internships.css";
import Planocast from "../Images/Planocast.webp";
import CentralModal from "./CentralModal";
import PMR from "../Images/PMRrecieptLogo.svg";
import EcoR from "../Images/EastCoastRailway.jpeg";

const internshipsArray = [
  {
    image: Planocast,
    title: "Full Stack Web Developer",
    text: "Designed and built the ‘Query Management’ and ‘Event Management’ app with seamless updates, minimal backend load, and optimized performance using reusable React components and base fetch functions.",
    button: "Link",
    link: "",
  },
  {
    image: PMR,
    title: "Frontend Developer",
    text: "Front End Developer using HTML, CSS, and JavaScript – Built a responsive, scalable UI with smooth animations for user sign-up, login, and dashboard viewing.",
    button: "Link",
    link: "https://pmrreceipts.netlify.app",
  },
  {
    image: EcoR,
    title: "Full Stack Intern",
    text: "Backend and Integration using Node.js, React.js, and SQL – Developed and integrated the Complaint Management System with secure routing, modularized JavaScript, and a normalized database schema.",
    button: "Link",
    link: "https://github.com/Sarans13/Railway-Backend",
  },
];

const Card = ({ image, title, text, button, link }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__content">
        <p>{text}</p>
        <span onClick={handleClick}>
          <button>{button}</button>
          <i className="fa-solid fa-plane-departure" />
        </span>
      </div>
      <CentralModal
        show={modalOpen}
        message="Oops, link is not found!"
        onClose={() => setModalOpen(false)} // Close the modal when done
      />
    </div>
  );
};

function Internships() {
  return (
    <div className="internships">
      <div className="heading">My Role As an Intern & Freelancing</div>
      <div className="grid-container">
        <div className="grid-container-wrapper">
          <div className="grid-container-content">
            <div className="grid-x grid-padding-x grid-margin-y">
              {internshipsArray.map((internship, index) => (
                <div className="cell medium-4" key={index}>
                  <Card
                    image={internship.image}
                    title={internship.title}
                    text={internship.text}
                    button={internship.button}
                    link={internship.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internships;
