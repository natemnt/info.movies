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
      console.log(this.state.movies);
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
      return  <article key={movies.id} className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xxs-12 animate-box info_movie__article">
                  <figure>
                  <Link to={"/Moviedetails/?id="+movies.id} className="col-lg-4 col-md-4 col-sm-4 info_movies__poster"><img src={'http://image.tmdb.org/t/p/w185'+movies.poster_path} 
                  alt="placeholder" className="img-responsive"/></Link>
                  <div className="col-lg-5 col-md-5 col-sm-5 info_movies__synopsis_container">
                    <p className="info_movies__synopsis">{movies.overview}</p>
                  </div>
                  </figure>
                  <h5 className="fh5co-article-title info_movies__title"><Link to={"/Moviedetails/?id="+movies.id}>{movies.original_title}</Link></h5>
                  <span className="fh5co-meta fh5co-date info_movies__date">{movies.release_date}</span> 
              </article>
    
    });
    return (
     <div className="container-fluid">
        <h1>
            Up Coming Films
        </h1>
          {movies}
          <div className="clearfix visible-xs-block"></div>
         </div>
    );
  }
}

export default Homepage;