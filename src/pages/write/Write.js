import './write.css'
import { MdAdd } from "react-icons/md";
import singlepost from "../../components/images/singlepost.jpg";

const Write = () => {
    return (
        <div className="write">
            <img className="writeImg" src={singlepost} alt="" ></img>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileinput">
                    <MdAdd  className="writeIcon"/>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your Story..." type="text" className="writeInput writeText"></textarea>

            </div>
            <button className="writeSubmit"> Publish</button>

        </form>
        </div>
      );
}
 
export default Write;