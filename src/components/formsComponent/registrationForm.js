import React,{Component} from 'react';
import Signup from './signupForm';
import Login from './loginForm';

class Registration extends Component{

    constructor(){
        super();
        this.state = {
            signup: false,
            login: true
        };
        this.signupLogin = this.signupLogin.bind(this);
      }

      signupLogin(){
          var signup = this.state.signup;
          var login = this.state.login;

          return this.setState({
              signup:!signup,
              login:!login
          });
      }

      render(){
        var self = this;
                return(
                    <div className="container-fluid">
                       
                        <form className="info_movies__signup-login">
                            <div className="info_movies__signup-login_buttons">
                                <p className="info_movies__signup_button" onClick={self.signupLogin}>Signup</p>
                                <p className="info_movies__login_button" onClick={self.signupLogin}>Login</p>
                            </div>
        
                           {self.state.signup ? <Signup/> : null}
                           {self.state.login ? <Login/> : null}
                        </form>
                    </div>
                );
            }
}

export default Registration;