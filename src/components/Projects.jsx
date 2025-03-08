import React, { useState } from "react";
import "../styles/Projects.css";
import { FaGithub, FaTimes } from "react-icons/fa";
import IndusaidVideo from "../Videos/indusaid.mp4";
import planetPlateVideo from "../Videos/PlanetPlate.mp4";
import farmerGVideo from "../Videos/farmerG.mp4";
import IndusaidImage from "../Images/indusaid-1.png";
import PlanetPlateImage from "../Images/ReSatiate-1.png";
import farmerGImage from "../Images/famerG-1.png";
import sidVideo from "../Videos/sid.mp4";
import sidImage from "../Images/sid.png";
import kalakritiVideo from "../Videos/Kalakriti.mp4";
import kalakritiImage from "../Images/kalakriti.png";
import taskGuideImage from "../Images/taskguide.png";
import taskGuideVideo from "../Videos/TaskGuide.mp4";

const Project = ({ project, openModal }) => {
  return (
    <div className="projects-group relative overflow-hidden">
      <div className="projects-media-wrapper relative">
        <img
          src={project.image}
          alt={project.title}
          className="projects-image projects-aspect-3-2 projects-object-cover"
        />
        <div className="projects-overlay-blur"></div>
      </div>
      <div className="projects-overlay projects-absolute projects-inset-0 projects-bg-gradient-to-t"></div>
      <div className="projects-absolute projects-bottom-0 projects-p-4">
        <h3 className="projects-text-xl projects-font-semibold projects-text-white">
          {project.title}
        </h3>
        <p className="projects-description">{project.description}</p>
        <a href={project.links.github} target="_blank" rel="noreferrer">
          <FaGithub className="projects-btn" />
        </a>
        <button
          className="projects-btn"
          onClick={() => openModal(project.video)}
        >
          Watch Video
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalVideo, setModalVideo] = useState(null);

  const openModal = (videoSrc) => {
    // console.log("clicked" + videoSrc);
    setModalVideo(videoSrc);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  const projects = [
    {
      id: "1",
      title: "Kalakriti",
      image: kalakritiImage,
      video: kalakritiVideo,
      description: "Interior Designing Consultation Platform",
      links: {
        github: "https://kalakriti-rouge.vercel.app/",
      },
    },
    {
      id: "2",
      title: "SID",
      image: sidImage,
      video: sidVideo,
      description: "Internship Drive for Spectrum.",
      links: {
        github: "https://spectrum-sid-2023.vercel.app/",
      },
    },
    {
      id: "3",
      title: "PlanetPlate",
      image: PlanetPlateImage,
      video: planetPlateVideo,
      description:
        "A Food Safety Application based on food recovery hierarchy.",
      links: {
        github: "https://iamkcube.github.io/PlanetPlate/",
      },
    },
    {
      id: "4",
      title: "Indusaid",
      image: IndusaidImage,
      video: IndusaidVideo,
      description: "Online Shark Tank!!!",
      links: {
        github: "https://indusaid.onrender.com/",
      },
    },
    {
      id: "5",
      title: "FarmerG",
      image: farmerGImage,
      video: farmerGVideo,
      description: "Removing middlemen and ensuring authentication.",
      links: {
        github: "https://github.com/Sarans13/FarmerG",
      },
    },
    {
      id: "6",
      title: "TaskGuide",
      image: taskGuideImage,
      video: taskGuideVideo,
      description: "Chatbot for Electric Substation.",
      links: {
        github: "https://taskguide-ciphersix.web.app/",
      },
    },
  ];

  return (
    <div className="projects">
      <div className="heading">My Work</div>
      <div className="projects-min-h-screen projects-bg-black projects-p-8">
        <div
          id="projects-projects-grid"
          className="projects-grid projects-gap-6 projects-sm-grid-cols-2 projects-lg-grid-cols-3"
        >
          {projects.map((project) => (
            <Project key={project.id} project={project} openModal={openModal} />
          ))}
        </div>
      </div>
      {/* Video Modal */}
      {modalVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
            <video
              key={modalVideo}
              src={modalVideo}
              controls
              autoPlay
              className="modal-video"
              ref={(video) => {
                if (video && window.innerWidth < 768) {
                  video.requestFullscreen?.(); // Try to enter full-screen mode
                }
              }}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
