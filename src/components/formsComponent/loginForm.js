import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props)
        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    }

    authWithFacebook(){
        console.log("auth facebook")
    }

    authWithEmailPassword(event){
        event.preventDefault()
        console.log("auth with email")
        console.table([{
            email:this.emailInput.value,
            password: this.passwordInput.value
        }])
    }
    render(){

        return(
            <div className="login">
                <input type="text" id="email" placeholder="Email" 
                        ref={(input)=>{this.emailInput = input}}/>
                <input type="text" id="password" placeholder="Password"
                        ref={(input)=>{this.passwordInput = input}}/>
                <button className="btn" id="login">login</button>
                <button className="btn btn-primary" id="facebookLogin" onClick={()=> {this.authWithFacebook()}}>Log In with Facebook</button>
                
               
            </div>
        )
    }
  

 
}

export default Login;