import React, {Component} from 'react';

class Login extends Component {

    render(){

        return(
            <div className="login">
                <input type="text" id="email" placeholder="Email"/>
                <input type="text" id="password" placeholder="Password"/>
                <button className="btn" id="login">login</button>
            </div>
        )
    }
  

 
}

export default Login;