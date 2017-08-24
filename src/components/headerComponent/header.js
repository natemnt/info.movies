import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          
          <div className="logo">
            <img src={require("../../Assets/images/info.movies.png")} alt="The info.movies logo" className="info_movies__logo"/>
          </div>

          <nav>
              <ul>
                  <li className="first" style={{marginRight:2+'em'}}>
                      <Link to="/">Home</Link>
                  </li>
                  <li style={{marginRight:2+'em'}}>
                      <Link to="/Newrelease">New Releases</Link>
                  </li>
                  <li style={{marginRight:2+'em'}}>
                      <Link to="/Boxoffice">Box Office</Link>    
                  </li>
                  <li className="last" style={{marginRight:2+'em'}}>
                      <Link to="/Search">Search</Link>
                  </li>
              </ul>
              </nav>
      </header>
    );
  }
}

export default Header;