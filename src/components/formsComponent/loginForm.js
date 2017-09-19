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
                <button className="btn" id="facebookLogin" onClick={()=> {this.authWithFacebook()}}>Log In with Facebook</button>
                <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
                <div style={{marginBottom:"10px"}} className="glyphicon glyphicon-info-sign"></div>
                <h5> If you don't have an account already, this form will create one</h5>
               
            </div>
        )
    }
  

 
}

export default Login;