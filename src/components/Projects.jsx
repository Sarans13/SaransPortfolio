import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
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

const Project = ({ project }) => {
  return (
    <div className="projects-group relative overflow-hidden">
      <div className="projects-media-wrapper relative">
        <img
          src={project.image}
          alt={project.title}
          className="projects-image projects-aspect-3-2 projects-object-cover"
        />
        <video
          src={project.video}
          autoPlay
          muted
          loop
          className="projects-video projects-aspect-3-2 projects-object-cover"
        ></video>
        <div className="projects-overlay-blur"></div>
      </div>
      <div className="projects-overlay projects-absolute projects-inset-0 projects-bg-gradient-to-t"></div>
      <div className="projects-absolute projects-bottom-0 projects-p-4">
        {/* <p className="projects-progress">{project.progress}</p> */}
        <h3 className="projects-text-xl projects-font-semibold projects-text-white">
          {project.title}
        </h3>
        <p className="projects-description">{project.description}</p>
        <a href={project.links.github} target="_blank" rel="noreferrer">
          <FaGithub className="projects-btn" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
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
        "An Food Safety Application based on food recovery heirarchy.",
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
      description: "Removing middlemen and ensuring Authentication.",
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
      }
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
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
