import NavBar from "../components/Common/Navbar";
import { Helmet } from "react-helmet";
import { INFO } from "../data/user";
import SEO from "../data/seo";
import Footer from "../components/Common/Footer";
import "./styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free";
import {
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.scrollYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <>
      <Helmet>
        <title className="title homepage-title">{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(",")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-wrapper">
                  <img
                    src="profile.jpeg"
                    alt="about"
                    className="homepage-image"
                  />
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a href={INFO.socials.github}>
                <FontAwesomeIcon icon={faGithub} className="homepage-social" />
              </a>
              <a href={INFO.socials.stackOverflow}>
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  className="homepage-social"
                />
              </a>
              <a href={INFO.socials.instagram}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="homepage-social"
                />
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="homepage-social"
                />
              </a>
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

export default Homepage;
