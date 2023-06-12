import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Logo from "../components/Common/Logo";
import AllProjects from "../components/Projects/AllProjects";

import { INFO } from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Things I've made to stop being a beginner.
            </div>

            <div className="subtitle projects-subtitle">
              I've worked on several projects over the years and I'm proud
              of the progress I've made. If you're
              interested in any of the projects I've worked on, please feel free
              to check out the code and suggest any improvements or enhancements
              you might have in mind. I'm always open to new ideas and feedback.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
