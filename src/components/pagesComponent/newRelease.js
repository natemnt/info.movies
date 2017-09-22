import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class Newrelease extends Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    var url ="https://api.themoviedb.org/3/movie/now_playing?api_key=3aba18b4b741b327b46e5373e09a48f7&language=en-US&page=1";
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results 
      });
      //console.log(this.state.movies);
    });
    
  }


  render() {

    var movies = _.map(this.state.movies,(movies) => {
      return  <div key={movies.id} className="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xxs-12">
                <div>
                  <Link to={"/Moviedetails/?id="+movies.id}><img src={'http://image.tmdb.org/t/p/w185'+movies.poster_path} 
                      alt="poster of a film"
                      /></Link>
                  <div>
                  <Link to={"/Moviedetails/?id="+movies.id} style={{fontSize:13+"px"}}>{movies.title}</Link>
                  </div>
                  <div className="info_movies__release_date"
                        style={{fontSize:13+"px"}}>
                  {movies.release_date}
                  </div>
                  <div className="info_movies__vote"
                        style={{fontSize:13+'px'}}>
                  {movies.vote_average}</div>
                </div>
              </div>
              
    })
    return (
     <div className="container">
       <h1>
            Playing in Theatres
        </h1>
       <div className="row">
        {movies}
        </div>
      </div>
    );
  }
}

export default Newrelease;