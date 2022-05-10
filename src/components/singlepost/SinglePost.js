import './singlepost.css';
// import singlepost from "../images/singlepost.jpg";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = () => {
const location = useLocation();
const path= location.pathname.split("/")[2];
const [post, setPost] = useState({});

useEffect(() => {
    const getPost = async ()=> {
        const res =await  axios.get("/posts/" + path);
        setPost(res.data)
            }
            getPost();
    },[path])


    return ( 
        <div className="singlepost">
            <div className="singlepostWrapper">
                {post.photo && (
                    <img src={post.photo} alt ="" className="singlePostImg">
                    </img>
                )}
                
                <h1 className='singlePostTitle'>
                    {post.title}
                    <div className="singlePostEdit">
                    <FaRegEdit className="postIconEdit"/>
                    <MdOutlineDeleteSweep className="postIconEdit"/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                    <span className="singlePostDate">{post.createdAt}</span>
                </div>
                <p className='singlePostDesc'>{post.description}</p>
            </div>
            

        </div>
     )
}
 
export default SinglePost;