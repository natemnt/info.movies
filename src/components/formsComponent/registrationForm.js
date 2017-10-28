import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {app, facebookProvider} from '../../base';
import ErrorM from '../messageComponent/errorMessage';
import WarningM from '../messageComponent/warningMessage';
import {FormErrors} from '../messageComponent/formErrors';

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
            warningMessage: '',
            email:'',
            password:'',
            formErrors:{email:'', password:''},
            emailValid:false,
            passwordValid:false,
            formValid:false
        };

        this.authWithFacebook = this.authWithFacebook.bind(this)
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
        this.handleChange=this.handleChange.bind(this)
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
                this.setState({warningMessage:'Try using facebook to login'})
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
            console.log(error.message)
            this.setState({errorMessage:'Invalid email or password'})
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

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value},
        ()=>{this.validateField(name, value)})/*validation continue */

        //console.log(this.state.name)
    }
    /*form validation function*/
    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        
        /*check to see if form is valid*/

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm);
                fieldValidationErrors.email = emailValid ? '': 'is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors:fieldValidationErrors,
            emailValid:emailValid,
            passwordValid:passwordValid
        }, this.validateForm)
    }

    validateForm(){
        this.setState({formValid:this.state.emailValid && this.passwordValid});
    }

    /*adds has-error class to fields*/
    errorClass(error){
        return(error.length === 0 ? '' : 'has-error');
    }

      render(){
        //console.log(this.state.formValid)
        console.log(this.state.errorMessage)
        if (this.state.redirect === true){
           {/*} return <Redirect to='/'/>{*/}
        }
                return(
                    <div className="container">
                        
                        <FormErrors formErrors={this.state.formErrors}/> 
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
                            {/*email input field*/}
                        <input type="text" id="email" placeholder="Email" name="email"
                                className={`form-control${this.errorClass(this.state.formErrors.email)}`}
                                 value={this.state.email}
                                ref={(input)=>{this.emailInput = input}} style={inputStyles}
                                onChange={(e)=> this.handleChange(e)}/>
                        
                        {/*password input field*/}
                        <input type="password" id="password" placeholder="Password" name="password"
                                className={`form-control${this.errorClass(this.state.formErrors.email)}`} 
                                value={this.state.password}
                                ref={(input)=>{this.passwordInput = input}} style={inputStyles}
                                onChange={(e)=> this.handleChange(e)}/>
                                
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
                        
                        <p style={{textAlign:'center'}}>forgot your <a href="#">password?</a></p>
                        <p style={{textAlign:'center'}}>Dont have an account? An account will be created when you sign in</p>
                    </div>
                );
            }
}

export default Registration;