import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your email.."></input>
                <label>Password</label>
                <input type="password" placeholder="Enter your password.."></input>
                <button className="loginButton">Login</button>
               </form>
            <button className="registerButton">
                <Link className='link' to="/register">Register</Link>
            </button>
        </div>
      );
}
 
export default Login;