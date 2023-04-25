import React from "react";
import Mylogin from "../components/MyLogin/Mylogin";

const Login = () => {
    return(
        <div className="Login">
            <div className="Login-container">
            <h1> Log in </h1>
                <form action="/" className="form">
                    <Mylogin />
                </form>
            </div>
        </div>
    );
}

export default Login;