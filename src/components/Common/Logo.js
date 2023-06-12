import { INFO } from "../../data/user";
import "./styles/Logo.css";
import { Link } from "react-router-dom";

const Logo = (props) => {
  let { width, link } = props;
  if (link === undefined) {
    link = true; // Set link prop to true if not provided
  }
  const imageElement = (
    <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
  );
  return <>{link ? <Link to="/">{imageElement}</Link> : imageElement}</>;
};

export default Logo;
