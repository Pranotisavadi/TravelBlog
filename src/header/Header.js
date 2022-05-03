import './header.css'
import View from "../images/view.JPG";

const Header = () => {
    return (
        <div className="Header">
            <div className="headerHeads">
                <span className="headerHeadSm">React & node</span>
                <span className="headerHeadLg">Blog</span>
            </div>
            <img className="headerImg" src={View} alt="Header"></img>
        </div>
      );
}
 
export default Header;