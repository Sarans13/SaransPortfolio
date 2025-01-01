import "./App.css";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

//import the components
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Internships from "./components/Internships";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import MySkillSet from "./components/MySkillSet";
import NavigationBar from "./components/NavigationBar";

function App() {
  // Implement the slider logic
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideCount = 6;
  const handleChangeSlide = (direction) => {
    const newIndex =
      direction === "up"
        ? (activeSlideIndex + 1) % slideCount
        : (activeSlideIndex - 1 + slideCount) % slideCount;
    setActiveSlideIndex(newIndex);
  };
  // Implement odd even logic
  const leftSlideClass =
    activeSlideIndex % 2 === 0 ? "leftSlide even" : "leftSlide odd";
  const rightSlideClass =
    activeSlideIndex % 2 === 0 ? "rightSlide even" : "rightSlide odd";
  // Implement the navbar logic
  const handleNavClick = (index) => {
    setActiveSlideIndex(index);
  };
  return (
    <div className="App">
      <div className="slideContainer">
        <div
          className={leftSlideClass}
          // Style for transform
          style={{
            transform: `translateY(-${
              (slideCount - 1 - activeSlideIndex) * 100
            }vh)`,
          }}
        >
          <div>
            <Contact activeSlide={activeSlideIndex}/>
          </div>
          <div>
            <NavigationBar onNavClick={handleNavClick} activeIndex={activeSlideIndex}/>
          </div>
          <div>
            <Internships />
          </div>
          <div>
            <NavigationBar onNavClick={handleNavClick} activeIndex={activeSlideIndex} />
          </div>
          <div>
            <AboutMe activeSlide={activeSlideIndex}/>
          </div>
          <div>
            <NavigationBar onNavClick={handleNavClick} activeIndex={activeSlideIndex}/>
          </div>
        </div>
        <div
          className={rightSlideClass}
          // style for right slide
          style={{
            transform: `translateY(-${activeSlideIndex * 100}vh)`,
          }}
        >
          <div>
            <LandingPage />
          </div>
          <div>
            <NavigationBar onNavClick={handleNavClick} activeIndex={activeSlideIndex}/>
          </div>
          <div>
            <MySkillSet activeIndex={activeSlideIndex}/>
          </div>
          <div>
            <NavigationBar onNavClick={handleNavClick} activeIndex={activeSlideIndex}/>
          </div>
          <div>
            <Projects />
          </div>
          <div>
          <NavigationBar onNavClick={handleNavClick} activeIndex={activeSlideIndex}/>
          </div>
        </div>
      </div>
      <div className="actionButtons">
        <button class="downButton" onClick={() => handleChangeSlide("down")}>
          <FaArrowUp />
        </button>
        <button class="upButton" onClick={() => handleChangeSlide("up")}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
}

export default App;
