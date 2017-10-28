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
    var movies = _.map(this.state.movies, (movies,i) => {
      return  <div key={i}
                      className="info_movie__article">                
                  <Link to={"/Moviedetails/?id="+movies.id} 
                        className="offset-lg-1 info_movies__poster">
                  <img src={'http://image.tmdb.org/t/p/w185'+movies.poster_path} 
                  alt="placeholder" className="img-responsive info_movies_img"/></Link> 

                  
                    <div>
                    <Link to={"/Moviedetails/?id="+movies.id} 
                        style={{fontSize:13+"px"}}
                        className="info_movies__text">{movies.title}</Link>
                    </div>
                    <div className="info_movies__release_date"
                          style={{fontSize:13+"px"}}>
                    {movies.release_date}
                    </div>
                  
              </div>
    });
    return (
     <div className="container">
       <div className="info_movies_homepage">
        <h1>
            Up Coming Films
        </h1>
          {movies}
      </div>
    </div>
    );
  }
}

export default Homepage;