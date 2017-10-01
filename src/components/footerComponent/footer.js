import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
          <img src={require("../../Assets/images/tmdb.png")} className="info_movies__tmdb_logo" alt="the movie database logo"/>
          <p>Copyright &#169; info.movies</p>
      </footer>
      
    );
  }
}

export default Footer;