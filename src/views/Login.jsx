import React from "react";

const Login = () => {
    return(
        <div className="Login">
            <div className="Login-container">
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Username</label>
                    <input type="email" id="email" 
                    className="input input-email"/>
                    <label htmlFor="password" className="label"> Password </label>
                    <input type="password" id="password" 
                    className="input input-password"/>
                    <input type="submit" value="Log in" 
                    className="primary-button login-button"/>
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button signup-buton"> Sign up</button>
            </div>
        </div>
    );
}

export default Login;