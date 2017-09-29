import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';
//import {Link} from 'react-router-dom';

class Homepage extends Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    var url ="https://api.themoviedb.org/3/movie/upcoming?api_key=3aba18b4b741b327b46e5373e09a48f7&language=en-US&page=1";
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results 
      });
      //console.log(this.state.movies);
    });
    
  }

  componentDidMount(){}

  componentWillReceiveProps(nextProps){

  }
  componentWillUpdate(nextProps, nextState){

  }
  /*Render function*/
  render() {
    //console.log(this.state.movies);
    var movies = _.map(this.state.movies, (movies) => {
      return  <article key={movies.id} 
                      className="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xxs-12 animate-box info_movie__article">
                  <figure>
                  <Link to={"/Moviedetails/?id="+movies.id} 
                        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xxs-12 offset-lg-1 info_movies__poster">
                  <img src={'http://image.tmdb.org/t/p/w185'+movies.poster_path} 
                  alt="placeholder" className="img-responsive"/></Link>
                  <div className="col-lg-5 col-md-5 col-sm-5 info_movies__synopsis_container">
                     
                  </div>
                  </figure>
                  
                   
              </article>
    
    });
    return (
     <div className="container">
        <h1>
            Up Coming Films
        </h1>
          {movies}
          
         </div>
    );
  }
}

export default Homepage;