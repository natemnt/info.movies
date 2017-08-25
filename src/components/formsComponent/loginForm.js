import React, {Component} from 'react';

class Login extends Component {

    render(){

        return(
            <div className="container-fluid">
            <h1>Login Form</h1>

            <form className="info_movies__signup-login">
                <div className="info_movies__signup-login_buttons">
                    <p className="info_movies__signup_button">Sign In</p>
                    <p className="info_movies__login_button">Login</p>
                </div>
            </form>

            </div>
        );
    }
}

export default Login;