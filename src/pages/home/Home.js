import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import './home.css';
import axios from "axios"
import { useState, useEffect } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get ("/posts")
            setPosts(res.data);
        }
        fetchPosts();
        },[])
    return ( 
    <div>
        <Header />             
        <div className="home">
           <Posts  posts = {posts}/>
           <SideBar />
          
        </div>
    </div>
        
     );
}
 
export default Home;