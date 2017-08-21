import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';

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
      console.log(this.state.movies);
    });
    
  }


  render() {

    var movies = _.map(this.state.movies,(movies) => {
      return <div key={movies.id}>
              <span>{movies.title}</span>

      </div>
    })
    return (
     <div className="container-fluid">

        <h1>
           Playing in theatres
        </h1>

        {movies}
         </div>
    );
  }
}

export default Newrelease;