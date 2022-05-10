import { Link } from 'react-router-dom';
import './post.css'
// import Post1 from "../images/post.JPG";

const Post = ({post}) => {
    return ( 
        <div className="post">
            {post.photo && (
                <img className="postImg" src={ post.photo } alt="Post"></img>
            )}
           <div className="postInfo">
               {/* <div className="postTypes" key={post.id}>{
                   post.catogories.map((c) => (
                       <span className="postType">{c.name}</span>
                   ))
               }               
               </div> */}
               <Link  to={`/post/${post._id}`} className="link"><span className="postTitle">{post.title}</span>
               </Link>
               
               <hr/>
               <span className="postDate">{(post.createdAt)}</span>               
            </div>
            <p className="postDesc">
                {post.description}
            </p>
        </div>

     );
}
 
export default Post;
