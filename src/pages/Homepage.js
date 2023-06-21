import NavBar from "../components/Common/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { INFO } from "../data/user";
import SEO from "../data/seo";
import Footer from "../components/Common/Footer";
import "./styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faStackOverflow,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Logo from "../components/Common/Logo";
import HomePic from "../Images/profile.jpeg"

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    // window.scrollTo(0, 0);

    const handleScroll = () => {
      let scroll = Math.round(window.scrollY, 2);

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

    handleScroll(); // Call handleScroll initially to set the logo size
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [oldLogoSize]);

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
      <HelmetProvider>
      <Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
      </HelmetProvider>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

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
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src={HomePic}
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.stackoverflow}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  className="homepage-social-icon"
                />
              </a>
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>
            </div>

          </div>
            <div className="page-footer">
              <Footer />
            </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
