import NavBar from "../components/Common/Navbar";
import INFO from "../data/user";
import "./styles/Homepage.css";

const Homepage = () => {
return (
<div className="page-content">
    <NavBar active="home" />
    <div className="content-wrapper">
        <div className="homepage-container">
        
            <div className="title homepage-title">
                {INFO.homepage.title}
            </div>

            <div className="subtitle homepage-subtitle">
                {INFO.homepage.description}
            </div>

        <div className="homepage-image-wrapper">
            <img src="../Images/profile.jpeg" alt="about" className="homepage-image" />
        </div>

        <div className="homepage-socials">
            <a href={INFO.socals.github}>

            </a>
            <a href={INFO.socals.stackOverflow}>
                
            </a>
            <a href={INFO.socals.instagram}>
                
            </a>
            <a href={INFO.main.email}>
                
            </a>
        </div>





        </div>
    </div>
</div>
);
}

export default Homepage;