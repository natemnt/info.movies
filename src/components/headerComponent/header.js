import React, { Component } from 'react';
import Searchform from '../formsComponent/searchForm';
import Nav from './navigation';

class Header extends Component {
    constructor(props){
      super(props);
      this.state={}

      //console.log(this.props)
    }
    


  render() {

    /*var classes= this.state.clicked ? 'active' : 'menu';*/
        
    return (
      <header>
          
          <div className="logo">
            <img src={require("../../Assets/images/info.movies.png")} alt="The info.movies logo" className="info_movies__logo"/>
          </div>
        <Nav authenticated={this.props.authenticated}/>
        <Searchform/>
          
      </header>
    );
  }
}

export default Header;