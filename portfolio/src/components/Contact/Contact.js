import React, { useState } from "react";
import "./Contact.css";
import { contact } from "../../portfolio";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    return (
      <div>
        <div className="contact-btn" onClick={() => setModalIsOpen(true)}>
          Contact
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button className="close-btn" onClick={() => setModalIsOpen(false)}>
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-info">
                <h3>Email</h3>
                <a href={`mailto:${contact.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  {contact.email}
                </a>
              </div>
              <div className="contact-info">
                <h3>Github</h3>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  {contact.github}
                </a>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  {contact.linkedin}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  };
  

export default Contact;
