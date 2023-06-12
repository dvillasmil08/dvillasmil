import NavBar from "../components/Common/Navbar";
import { Helmet } from "react-helmet";
import { INFO } from "../data/user";
import Footer from "../components/Common/Footer";
import "./styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/fontawesome-free';
import {faGithub, faStackOverflow, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Homepage = () => {
return (
    <>
<Helmet>
            <title className="title homepage-title">
                {INFO.main.title}
            </title>

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
                    <img src="profile.jpeg" alt="about" className="homepage-image" />
                </div>

            </div>
        

        </div>

        <div className="homepage-socials">
            <a href={INFO.socials.github}>
                <FontAwesomeIcon icon={faGithub} className="homepage-social" />
            </a>
            <a href={INFO.socials.stackOverflow}>
                <FontAwesomeIcon icon={faStackOverflow} className="homepage-social" />
            </a>
            <a href={INFO.socials.instagram}>
                <FontAwesomeIcon icon={faInstagram} className="homepage-social" />
            </a>
            <a href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="homepage-social" />
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
}

export default Homepage;