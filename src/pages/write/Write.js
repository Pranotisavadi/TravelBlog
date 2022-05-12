import './write.css'
import { MdAdd } from "react-icons/md";
// import singlepost from "../../components/images/singlepost.jpg";
import axios from 'axios';
import { useState } from 'react';

const Write = () => {
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const NewPost ={
            title, desc,
        };
        if(file){
           const data = new FormData();
           const filename = Date.now() + file.name;
           data.append("name", filename);
           data.append("file", file);
           NewPost.photo = filename;
           try{
               await axios.post("/upload", data)

           }catch(err){ }
        }
           try{
            const res = await axios.post("/posts", NewPost);
            window.location.replace("/post/" + Response.data._id);

           }catch (err){}       

    };
    return (
        <div className="write">
            {file && 
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" ></img>}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileinput">
                    <MdAdd  className="writeIcon"/>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}} onChange={e=> setFile(e.target.files[0])}/>
                <input type="text" placeholder='Title' className="writeInput" autoFocus={true} onChange={e=> setTitle(e.target.value) }/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your Story..." type="text" className="writeInput writeText" onChange={e=> setDesc(e.target.value) }></textarea>

            </div>
            <button className="writeSubmit" type="submit"> Publish</button>

        </form>
        </div>
      );
}
 
export default Write;