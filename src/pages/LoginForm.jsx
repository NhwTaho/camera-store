import React from 'react'
import '../assets/css/LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 const LoginForm = () => {   
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />

                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" >
                    <Link to="http://localhost:3000/">Login</Link>
                </button>
                
                <div className="register-link">
                    <p>Dont't have an account? <a href="#">Register</a></p>
                 </div>
             </form>
        </div>
    );

};
export default LoginForm