import './register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
    try{
       
        const res = await axios.post("/auth/register",{
             username, email, password
         });
         res.data && window.location.replace("/login");
    }catch(err){
        setError(true);
    }     
        
   };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit} className="registerForm" >
                <label>Email</label>
                <input type="email" placeholder="Enter your email.."onChange={e => setEmail(e.target.value)}></input>
                <label>Username</label>
                <input type="text" placeholder="Enter your username .." onChange={e => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter your password.."onChange={e => setPassword(e.target.value)}></input>
                <button className="registerButton1" type="submit">Register</button>
               </form>
            <button className="regLoginButton"> <Link className='link' to="/login">Login</Link></button>
            {/* <span>Sonething went Wrong!</span> */}
        </div>
      );
}
 
export default Register;