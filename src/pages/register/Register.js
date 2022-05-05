import './register.css'

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Email</label>
                <input type="email" placeholder="Enter your email.."></input>
                <label>Username</label>
                <input type="text" placeholder="Enter your username .."></input>
                <label>Password</label>
                <input type="password" placeholder="Enter your password.."></input>
                <button className="registerButton1">Register</button>
               </form>
            <button className="regLoginButton">Login</button>
        </div>
      );
}
 
export default Register;