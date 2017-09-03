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
      console.log(this.state.movies);
    });
    
  }


  render() {

    var movies = _.map(this.state.movies,(movies) => {
      return <tr key={movies.id}>
              <th scope="row"><Link to={"/Moviedetails/?id="+movies.id}>{movies.title}</Link></th>
              <td data-title="Released">{movies.release_date}</td>
              <td data-title="Rating">{movies.vote_average}</td>
      </tr>
    })
    return (
     <div className="container-fluid">

      <table className="table table-striped">
        <caption>Playing in theatres</caption>
        <thead>
          <tr>
            <th scope="col">Film Title</th>
            <th scope="col">Released</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
         {movies}
        </tbody>
      </table>
        
         </div>
    );
  }
}

export default Newrelease;