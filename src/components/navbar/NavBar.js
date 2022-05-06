import "./navbar.css";
import { BsLinkedin, BsGithub, BsSearch } from "react-icons/bs";
import Search from "../images/search.JPG";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;
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
          <li className="navListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="navListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="navListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="navListItem"><Link className="link" to="/">WRITE</Link></li>
          <li className="navListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {
          user ? ( 
          <img className="navImg" src={Search} alt="Search Bar"></img>
          ) :(
            <ul className="navList">
              <li className="navListItem"> <Link className="link" to="/login">LOGIN</Link></li>
              <li className="navListItem"> <Link className="link" to="/register">REGISTER</Link></li>
            </ul>
          )
        }
       <BsSearch className="searchIcon" />
      </div>
    </div>
  );

};

export default NavBar;
