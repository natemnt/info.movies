import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions'

class Newrelease extends Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    const url ="https://api.themoviedb.org/3/movie/now_playing?api_key=3aba18b4b741b327b46e5373e09a48f7&language=en-US&page=1";
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results 
      });
      //console.log(this.state.movies);
    });
    
  }


  render() {
    //console.log(this.props.actions)
    var movies = _.map(this.state.movies,(movies, i) => {
      return  <div key={i} 
                      className="info_movie__article">
                <div className ="offset-lg-1 info_movies__poster">
                    <Link to={"/Moviedetails/?id="+movies.id}
                          >
                      <img className="img-responsive info_movies_img" 
                            src={'http://image.tmdb.org/t/p/w185'+movies.poster_path} 
                            alt="poster of a film"
                        />
                    </Link>
                    </div>
                  <div>
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
                <div className="top-buffer"></div>
              </div>
              
    })
    return (
     <div className="container">
       <div className="info_movies_newRelease">
          <h1>
              Playing in Theatres
          </h1>
          
            {movies}
        
        </div>
      </div>
    );
  }
}

/*redux function that maps state to props */
function mapStateToProps(state, ownProps){
  return{
      nowPlaying: state.nowPlaying
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(movieActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newrelease);