import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{

    constructor(props){
        super(props);
        this.state={}
        //console.log(this.props)
    }

    burgerToggle(){
        var navBar = document.querySelector('.narrowLinks');
        if(navBar.style.display === 'block'){
            navBar.style.display = 'none';
        }else{
            navBar.style.display = 'block';
        }
    }

    render(){

        return(
            
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        
                                <Link to="/">Home</Link>
                                <Link to="/Newrelease">New Releases</Link>
                                <Link to="/Playing_Now">Showtimes</Link>
                                <Link to="/Search">Search</Link>
                            
                            {this.props.authenticated
                            ? (<span>
                                    <Link to="/dashboard">
                                    <span className="glyphicon glyphicon-user"></span>
                                    </Link>
                                    <Link to="/logout" aria-label="Log out">
                                    <span className="glyphicon glyphicon-log-out"></span>
                                    </Link>
                                </span>
                            )
                            : (
                            
                                <Link to="/info.movies">My account</Link>
                           
                            )}
                        
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                        <div className="narrowLinks">
                        
                                <Link to="/" onClick={this.burgerToggle}>Home</Link>
  
                                <Link to="/Newrelease"onClick={this.burgerToggle}>New Releases</Link>
                          
                                <Link to="/Playing_Now" onClick={this.burgerToggle}>Showtimes</Link>
                            
                                <Link to="/Search" onClick={this.burgerToggle}>Search</Link>
                            
                            {this.props.authenticated
                            ? ( <span>
                                <Link to="/dashboard" onClick={this.burgerToggle}>
                                <span className="glyphicon glyphicon-user"></span>
                                </Link>
                                <Link to="/logout" aria-label="Log out">
                                <span className="glyphicon glyphicon-log-out"
                                onClick={this.burgerToggle}></span>
                                </Link>
                                </span>
                            )
                            : (
                                <Link to="/info.movies" onClick={this.burgerToggle}>My account</Link>
                            )}
                        </div>
                    </div>
            </nav>
        )
    }
}

export default Nav;