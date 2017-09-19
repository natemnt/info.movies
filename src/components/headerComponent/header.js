import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './navigation';

class Header extends Component {
    
constructor(){
    super();
    this.state={
        clicked:false
    }
    this.handleClick=this.handleClick.bind(this);
    this.reset=this.reset.bind(this);
}

handleClick(){
    this.setState({
        clicked:true
    })
}
reset(){
    this.setState({
        clicked:false
    })
}
  render() {

    /*var classes= this.state.clicked ? 'active' : 'menu';*/
        
    return (
      <header>
          
          <div className="logo">
            <img src={require("../../Assets/images/info.movies.png")} alt="The info.movies logo" className="info_movies__logo"/>
          </div>
        <Nav/>
          
      </header>
    );
  }
}

export default Header;