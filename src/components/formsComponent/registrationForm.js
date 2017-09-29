import React,{Component} from 'react';

const registrationStyles = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    borderRadius: "5px",
    padding: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#d3d3d3"
}

const inputStyles ={
    
    maxWidth:"315px",
    margin:"20px auto"
}
const infoBox ={
    marginBotton: "10px",
    backgroundColor:"#A9A9A9",
    padding:"10px"
}
class Registration extends Component{

    constructor(props){
        super(props);
        this.state = {};

        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
      }

      authWithEmailPassword(event){
        event.preventDefault()
        console.log("auth with email")
        console.table([{
            email:this.emailInput.value,
            password: this.passwordInput.value
        }])
    }

    authWithFacebook(){
        
        console.log("auth facebook")
    }

      render(){
        
                return(
                    <div className="container">
                       <div style={registrationStyles}>
                        <button className="btn btn-primary" id="facebookLogin" 
                        onClick={()=> {this.authWithFacebook()}}
                        style={{width:100+'%'}}>
                        Log In with Facebook</button>
                        
                        <form onSubmit={(event) => {this.authWithEmailPassword(event)}} 
                                ref={(form) => {this.loginForm = form}}
                                style={{width:100+'%'}}>
                        <div style={infoBox} className="fa fa-info-circle">
                            An account will be created for new users
                        </div>
                            <label>Email: </label>
                        <input type="text" id="email" placeholder="Email" 
                        ref={(input)=>{this.emailInput = input}} style={inputStyles}/>
                        <label>Password: </label>
                        <input type="password" id="password" placeholder="Password"
                        ref={(input)=>{this.passwordInput = input}} style={inputStyles}/>
                    
                        <input className="btn" id="login" value="Login" 
                            type="submit" style={{width:100+"%"}}/>
                
                        
                        </form>
                        </div>
                        
                    </div>
                );
            }
}

export default Registration;