import './sidebar.css'
import Me from "../images/me.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [caty, setCaty] = useState([])

    useEffect(() => {
        const getCaty = async () => {
            const res = await axios.get("/types");
            setCaty(res.data)
        };
        getCaty();

    },[])
    return ( 
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME </span>
                    <img src={Me} alt="Me"></img>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit enim ducimus impedit, quas repudiandae neque quae, quaerat nam temporibus dolores deleniti assumenda maiores, mollitia labore perspiciatis consequuntur ab nisi!</p>
              
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        {caty.map((c) => (
                            <Link to={`/?caty=${c.name}`} className="link">
                                   <li className="sidebarListItem" key={caty.id}>{c.name}</li>
                            </Link>
                         

                        ))}
                        
                    </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <a
          href="https://linkedin.com"
          target="_blank" rel="noreferrer"
          className = "sidebarIcon"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer"  className = "sidebarIcon">
          <BsGithub />
        </a>

                </div>

            </div>
           
        </div>
     );
}
 
export default SideBar;