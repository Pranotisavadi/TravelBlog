import './singlepost.css';
import singlepost from "../images/singlepost.jpg";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

const SinglePost = () => {
    return ( 
        <div className="singlepost">
            <div className="singlepostWrapper">
                <img src={singlepost} alt ="" className="singlePostImg">
                </img>
                <h1 className='singlePostTitle'>
                    My first Blog
                    <div className="singlePostEdit">
                    <FaRegEdit className="postIconEdit"/>
                    <MdOutlineDeleteSweep className="postIconEdit"/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Pranoti</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit. Exercitationem minima ipsam vero incidunt. Nobis consectetur quisquam nesciunt repellendus accusantium, architecto molestias tempora saepe a, unde, omnis quam alias
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit. Exercitationem minima ipsam vero incidunt. Nobis consectetur quisquam nesciunt repellendus accusantium, architecto molestias tempora saepe a, unde, omnis quam alias..</p>
            </div>
            

        </div>
     )
}
 
export default SinglePost;