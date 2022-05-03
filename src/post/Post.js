import './post.css'
import Post1 from "../images/post.JPG";

const Post = () => {
    return ( 
        <div className="post">
           <img className="postImg" src={ Post1 } alt="Me"></img>
           <div className="postInfo">
               <div>
                   <span className="postType">Hiking</span>
                   <span className="postType">Cruise</span>
                   
               </div>
               <span className="postTitle">Lorem ipsum dolor</span>
               <hr/>
               <span className="postDate">1 hour ago</span>               
            </div>
            <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, at nihil voluptate adipisci eum saepe ut sequi beatae rerum doloribus consequatur assumenda dolorum id repudiandae quo iste ratione dolorem.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, at nihil voluptate adipisci eum saepe ut sequi beatae rerum doloribus consequatur assumenda dolorum id repudiandae quo iste ratione dolorem.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, at nihil voluptate adipisci eum saepe ut sequi beatae rerum doloribus consequatur assumenda dolorum id repudiandae quo iste ratione dolorem.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, at nihil voluptate adipisci eum saepe ut sequi beatae rerum doloribus consequatur assumenda dolorum id repudiandae quo iste ratione dolorem.


            </p>
        </div>

     );
}
 
export default Post;
