import React, {useState,useEffect} from "react";
import "../styles/AboutMe.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function AboutMe({activeSlide}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (activeSlide === 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [activeSlide]);
  return (
    <div className={`aboutMe ${isVisible ? "" : "inVisible"}`}>
      <div className="aboutMeContainer">
        <div className="aboutMePara">
          <div className="heading">Who Am I?</div>
          <div className="aboutMeParagraph">
            As a dedicated student with a strong passion for technology, I am
            actively pursuing a career in <span>software engineering</span>,
            eager to leverage my growing <span>programming skills</span> and{" "}
            <span>analytical thinking</span> to design and develop{" "}
            <span>innovative solutions</span> that solve real-world problems. I
            am particularly drawn to the creative potential of
            <span>coding</span> and the opportunity to contribute to impactful
            projects while continuously learning and adapting to the evolving
            landscape of the tech industry.
          </div>
        </div>
        <div className="aboutMyEducation">
          <div className="heading">My Educational Journey</div>
          <div className="verticalTimelineWrapper">
            <div className={`timelineContentHead ${isVisible ? "scrolling" : ""}`}>
            <div className="timelineContent">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  dateClassName="customDate"
                  date="2019"
                  iconStyle={{
                    background: "var(--sarans_blue)",
                    color: "#fff",
                  }}
                  contentStyle={{
                    background: "var(--sarans_lightest_blue)",
                    color: "black",
                    borderRadius: "8px",
                    fontSize: "0.625rem",
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    DAV Public School, Pokhariput, Bhubaneswar
                  </h3>
                  <p style={{ fontSize: "0.625rem" }}>Passed with 96.8%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  dateClassName="customDate"
                  date="2021"
                  iconStyle={{
                    background: "var(--sarans_blue)",
                    color: "#fff",
                  }}
                  contentStyle={{
                    background: "var(--sarans_lightest_blue)",
                    color: "black",
                    borderRadius: "8px",
                    fontSize: "0.625rem",
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    DAV Public School, Pokhariput, Bhubaneswar
                  </h3>
                  <p style={{ fontSize: "0.625rem" }}>Passed with 96.4%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  dateClassName="customDate"
                  date="2025 (Expected)"
                  iconStyle={{
                    background: "var(--sarans_blue)",
                    color: "#fff",
                  }}
                  contentStyle={{
                    background: "var(--sarans_lightest_blue)",
                    color: "black",
                    borderRadius: "8px",
                    fontSize: "0.625rem",
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Odisha University of Technology and Research, Bhubaneswar
                  </h3>
                  <p style={{ fontSize: "0.625rem" }}>
                    Currently Pursuing | CGPA: 9.71*
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
