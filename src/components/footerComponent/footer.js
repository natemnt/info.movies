import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
          <p>Footer</p>

          <p>More footer content</p>
          <img src={require("../../Assets/images/tmdb.png")} className="info_movies__tmdb_logo" alt="the movie database logo"/>
      </footer>
      
    );
  }
}

export default Footer;