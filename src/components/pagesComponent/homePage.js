import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions'


class Homepage extends Component {

  constructor(){
    super();
    this.state = {};

  }

  /*Render function*/
  render() {

    //console.log(this.props.movie);
    var movies = _.map(this.props.movie, (movies,i) => {
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

/*redux function that maps state to props */
function mapStateToProps(state, ownProps){
  return{
      movie: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(movieActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage)


