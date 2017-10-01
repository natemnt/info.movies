import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {app, facebookProvider} from '../../base';
import ErrorM from '../messageComponent/errorMessage';
import WarningM from '../messageComponent/warningMessage';

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
    margin:"20px 10px 10px 20px",
    width:"90%"
}
const infoBox ={
    marginBotton: "10px",
    marginTop:"10px",
    backgroundColor:"#A9A9A9",
    padding:"10px"
}
class Registration extends Component{

    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            errorMessage:'',
            warningMessage: ''
        };

        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
      }

      authWithEmailPassword(event){
        event.preventDefault()
        
        const email = this.emailInput.value
        const password = this.passwordInput.value;

        /*this fetches all users and checks for a match*/
        app.auth().fetchProvidersForEmail(email)
        .then((providers) => {
            if(providers.length === 0){
                //logic to create user
                return app.auth().createUserWithEmailAndPassword(email,password)
            }else if(providers.indexOf("password") === -1){
                //they used facebook to signin
                this.loginForm.reset()
                this.setState({warningMessage:'Try an alternative'})
            }else{
                //sign user in
                return app.auth().signInWithEmailAndPassword(email, password)
            }
        }).then((user)=>{
            if(user && user.email){
                this.loginForm.reset()
                this.setState({redirect:true})
            }
        })
        .catch((error) =>{
            this.setState({errorMessage:error.message})
        })
    }

    authWithFacebook(){
        app.auth().signInWithPopup(facebookProvider)
        .then((result, error) => {
            if (error){
                this.setState({errorMessage:'Something went wrong'})   
            }else{
                this.setState({redirect:true})
            }
        })
        
    }

      render(){

        if (this.state.redirect === true){
            return <Redirect to='/'/>
        }
                return(
                    <div className="container">
                        
                        <WarningM warningMessage={this.state.warningMessage}/>

                        <ErrorM errorMessage={this.state.errorMessage}/>
                            
                            {/*login form*/}
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
                            
                        <input type="text" id="email" placeholder="Email" 
                        ref={(input)=>{this.emailInput = input}} style={inputStyles}/>
                        
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