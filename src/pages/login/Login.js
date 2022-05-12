
import { Link } from 'react-router-dom';
import './login.css'
import { useContext, useRef } from 'react';
import  { Context } from '../../context/Context';
import axios from 'axios';
// import { LoginFailure, LoginSuccess, LoginStart } from '../../context/Actions'



const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
     const  dispatch  = useContext(Context);
    //  const isFetching  = useContext(Context);
     const  user  = useContext(Context);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
         dispatch({type: "LOGIN_START"});    
        
        try{
            const res = await axios.post("/auth/login", {
                username:userRef.current.value,
                password:passwordRef.current.value,
            })
           dispatch({type: "LOGIN_SUCCESS", payload:res.data });
        }catch (err){
            dispatch({type: "LOGIN_FAILURE"});
        }

    };
    console.log(user);

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Enter your username.."  ref={userRef}></input>
                <label>Password</label>
                <input type="password" placeholder="Enter your password.." ref={passwordRef}></input>
                <button type="submit" className="loginButton">Login</button>
               </form>
            <button className="registerButton">
                <Link className='link' to="/register">Register</Link>
            </button>
        </div>
      );
}
 
export default Login;