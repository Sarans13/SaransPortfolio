import React, { useState, useEffect } from "react";
import { FaMapMarker, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";
import "../styles/Contact.css";
import CentralModal from "./CentralModal";

const Contact = ({ activeSlide }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (activeSlide === 5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [activeSlide]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    console.log(accessKey);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setShowModal(true);
        setModalMessage("Form Submitted Successfully");
        event.target.reset();
      } else {
        setShowModal(true);
        setModalMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setShowModal(true);
      setModalMessage("An unexpected error occurred.");
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`contact ${isVisible ? "" : "inVisible"}`}>
      <div className="section-header">Contact</div>
      <div className="contact-wrapper">
        {/* Left contact page */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
          >
            <div className="alt-send-button">
              <span className="send-text">Send</span>
            </div>
          </button>
        </form>

        {/* Right contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FaMapMarker size={16} />
              <span className="contact-text place">Bhubaneswar, Odisha</span>
            </li>
            <li className="list-item">
              <FaEnvelope size={16} />
              <span className="contact-text gmail">
                <a
                  href="mailto:sarans.mishra@gmail.com"
                  title="Send me an email"
                >
                  sarans.mishra@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/Sarans13"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/sarans-mishra-489596253"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/Sarans13/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <SiLeetcode size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/user/saransm9rec/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <SiGeeksforgeeks size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.naukri.com/code360/profile/ad43be42-f792-4202-921c-12eee918ff6e"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <SiCodingninjas size={24} />
              </a>
            </li>
          </ul>
          <hr />

          <div className="copyright">&copy; All of the rights reserved.</div>
        </div>
      </div>
      <CentralModal
        show={showModal}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Contact;
