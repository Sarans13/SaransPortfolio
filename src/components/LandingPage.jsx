import React from "react";
import Typewriter from "typewriter-effect";
import imagedeveloper from "../Images/PhoneBackground.jpeg";
import "../styles/LandingPage.css";

function LandingPage() {
  const typewriterOptions = {
    strings: [
      "I'm a Full Stack Developer",
      "I'm a React Js Developer",
      "I'm a Node Js Developer",
      "I'm a UI Developer",
      "I'm a Javascript Developer",
    ],
    autoStart: true,
    loop: true,
  };

  return (
    <div className="landingPage">
      <div className="imageAndTextContainer">
        <div className="textContainer">
          Hello 👋 I'm
          <h2 className="greeting">
            Sarans Mishra
          </h2>
          <div className="introduction">
            Currently a student & a software Enthusiast.
            <br />
            <span className="otherColorContainer">
              To know more about my journey please click on the buttons at the
              top left and bottom right.
            </span>
          </div>
          <Typewriter options={typewriterOptions} />
        </div>
        <div className="imageContainer">
          <img
            className="developerImage"
            src={imagedeveloper}
            alt="Developer"
          />
          <div className="imageShadowBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
