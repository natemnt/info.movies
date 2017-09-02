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
/*I need to fix this issue */
      signupLogin(word){
          
          var signup, login;
          if(word == "signup"){signup = true; login = false;}
            else{login = true; signup = false;}
            console.log(word);
          return this.setState({signup:signup,login:login});
      }

      render(){
        var self = this;
                return(
                    <div className="container-fluid">
                       
                        <form className="info_movies__signup-login">
                            <div className="info_movies__signup-login_buttons">
                                <p className="info_movies__signup_button" onClick={self.signupLogin.bind(null,"signup")}>Signup</p>
                                <p className="info_movies__login_button" onClick={self.signupLogin.bind(null,"login")}>Login</p>
                            </div>
        
                           {self.state.signup ? <Signup/> : null}
                           {self.state.login ? <Login/> : null}
                        </form>
                    </div>
                );
            }
}

export default Registration;