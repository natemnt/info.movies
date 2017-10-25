import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{

    constructor(props){
        super(props);
        this.state={}
        
        this.openSlideMenu = this.openSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
    }

    burgerToggle(){
        var navBar = document.querySelector('.narrowLinks');
        if(navBar.style.display === 'block'){
            navBar.style.display = 'none';
        }else{
            navBar.style.display = 'block';
        }
    }

    openSlideMenu(){
        document.getElementById('nav_bar__side_menu').style.width = '250px';  
    }

    closeSlideMenu(){
        document.getElementById('nav_bar__side_menu').style.width = '0';  
    }    

    render(){

        return(
        <div className="header_divider">
            <nav className="nav_bar">
                <span className="open_slide">
                    <a href="#" id="open_slide_svg" onClick={this.openSlideMenu}>
                        <svg width="30" height="30">
                            <path d="M0,5 30,5" stroke="#000"
                                strokeWidth="5" className="open_slide_stroke"/>
                            <path d="M0,14 30,14" stroke="#000"
                                strokeWidth="5" className="open_slide_stroke"/>
                            <path d="M0,23 30,23" stroke="#000"
                                strokeWidth="5" className="open_slide_stroke"/>
                        </svg>
                    </a>
                </span>
                <ul className="nav_bar_list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Newrelease">New Releases</Link></li>
                    <li><Link to="/Playing_Now">Showtimes</Link></li>
                    <li> {this.props.authenticated
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
                           
                            )}</li>
                </ul>
                
            </nav>

            <div id="nav_bar__side_menu" className="nav_bar__side_nav">
                <a href="#" className="nav_bar__btn_close"
                    onClick={this.closeSlideMenu}>&times;</a>
                <Link to="/">Home</Link>
                <Link to="/Newrelease">New Releases</Link>
                <Link to="/Playing_Now">Showtimes</Link>
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
            
            
        )
    }
}

export default Nav;