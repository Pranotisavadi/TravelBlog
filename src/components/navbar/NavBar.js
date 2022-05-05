import "./navbar.css";
import { BsLinkedin, BsGithub, BsSearch } from "react-icons/bs";
import Search from "../images/search.JPG";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <a
          href="https://linkedin.com"
          target="_blank" rel="noreferrer"
          className = "navIcon"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer"  className = "navIcon">
          <BsGithub />
        </a>
      </div>

      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">HOME</li>
          <li className="navListItem">ABOUT</li>
          <li className="navListItem">CONTACT</li>
          <li className="navListItem">WRITE</li>
          <li className="navListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <img className="navImg" src={Search} alt="Search Bar"></img><BsSearch className="searchIcon" />
      </div>
    </div>
  );

};

export default NavBar;
