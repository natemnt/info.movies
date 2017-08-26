import React, {Component} from 'react';

class Signup extends Component {

    render(){

        return(
                <div className="signup">
                    <input type="text" id="firstname" placeholder="First Name"/>
                    <input type="text" id="lastname" placeholder="Last Name"/>
                    <input type="text" id="email" placeholder="Email"/>
                    <input type="text" id="password" placeholder="Password"/>
                    <input type="text" id="confirmPassword" placeholder="Confirm Password"/>
                    <button id="signup">Signup</button>
                </div>
           
        );
    }
}

export default Signup;