import "./styles/Logo.css";
import { Link } from "react-router-dom";
import LogoPic from "../../Images/Shock500.png"

const Logo = (props) => {
  let { width, link } = props;
  if (link === undefined) {
    link = true; // Set link prop to true if not provided
  }
  const imageElement = (
    <img src={LogoPic} alt="logo" className="logo" width={width} />
  );
  return <>{link ? <Link to="/">{imageElement}</Link> : imageElement}</>;
};

export default Logo;
