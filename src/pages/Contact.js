import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import NavBar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Logo from "../components/Common/Logo";
import Socials from "../components/About/Socials";
import eSports from "../Images/esports.JPG";

import { INFO } from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Contact | ${INFO.contact.title}`}</title>
          <meta name="description" content={currentSEO.description} />
          <meta name="keywords" content={currentSEO.keywords.join(", ")} />
        </Helmet>
      </HelmetProvider>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="contact-container">
            <div className="contact-main">
              <div className="contact-right-side">
                <div className="title contact-title">{INFO.contact.title}</div>

                <div className="subtitle contact-subtitle">
                  Thank you for wanting to connect! If you have any feedback, questions, or suggestions, please feel free to email me at{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href={`mailto:${INFO.main.email}`}
                  >
                    {INFO.main.email}
                  </a>
                  . If you prefer to connect on social media, you can
                  find me on{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  {" "} and {" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href={INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  .
                </div>
              </div>

              <div className="contact-left-side">
                <div className="contact-image-container">
                  <div className="contact-image-wrapper">
                    <img
                      src={eSports}
                      alt="contact"
                      className="contact-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-socials-mobile">
              <Socials />
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          <div className="page-footer">
            <Footer />
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
