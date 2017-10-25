import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {app, facebookProvider} from '../../base';
import ErrorM from '../messageComponent/errorMessage';
import WarningM from '../messageComponent/warningMessage';

const registrationStyles = {
    width: "90%",
    maxWidth: "315px",
    height:"400px",
    margin: "20px auto",
    borderRadius: "5px",
    padding: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#ffffff"
    
}

const inputStyles ={
    
    maxWidth:"315px",
    margin:"20px 10px 10px 20px",
    width:"90%"
}
const infoBox ={
    marginBotton: "10px",
    marginTop:"10px",
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
                        
                        
                        <form onSubmit={(event) => {this.authWithEmailPassword(event)}} 
                                ref={(form) => {this.loginForm = form}}
                                style={{width:100+'%'}}>
                        <div style={infoBox}>
                            <p>Already a member?</p>
                            <p>Sign in to your account</p>
                        </div>
                            
                        <input type="text" id="email" placeholder="Email"
                                className="form-control" 
                                ref={(input)=>{this.emailInput = input}} style={inputStyles}/>
                        
                        <input type="password" id="password" placeholder="Password"
                                className="form-control"
                                ref={(input)=>{this.passwordInput = input}} style={inputStyles}/>
                    <div className="info_movies_signin_check">
                        <input type="checkbox" name="rememberme" 
                                value="rememberme" className="info_movies_checkbox"/><span className="check_text">Remember Me</span>
                        <input className="btn info_movies__login_btn" id="login" value="Sign In" 
                            type="submit"/>
                    </div>
                        
                        </form>
                        <button className="btn btn-primary" id="facebookLogin" 
                        onClick={()=> {this.authWithFacebook()}}
                        style={{width:100+'%'}}>
                        Log In with Facebook</button>
                        </div>
                        
                    </div>
                );
            }
}

export default Registration;