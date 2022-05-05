import './setting.css'
import SideBar from '../../components/sidebar/SideBar';
import View from "../../components/images/view.JPG";
import { RiUserSettingsLine } from "react-icons/ri";



const Settings = () => {
    return (  
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle"></div>
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
                 </div>
                 <form className="settingsForm">
                     <label>Profile Picture</label>
                     <div className="settingsPPic">
                     <img src={View} alt="Header"></img>
                     <label htmlFor='fileinput'>
                         <RiUserSettingsLine className="settingsPPicIcon"/>
                     </label>
                     <input type="file" id="fileinput" style={{display:"none"}}>
                     </input>
                     </div>
                     <label>Username</label>
                     <input type="text" placeholder='abc'></input>
                     <label>Email</label>
                     <input type="email" placeholder='abc@gmail.com'></input>
                     <label>Password</label>
                     <input type="password"></input>
                     <button className="settingsSubmit">Update</button>
                 </form>
           
                <SideBar />
          
        </div>
    );
}
 
export default Settings;