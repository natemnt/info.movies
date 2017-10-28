import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';


class Search extends Component {

  constructor(props){
      super(props);
      this.state = {movies:{}};
  }

  componentWillMount(){

     //console.log(this.props.location)
     var {search} = this.props.location;
     var search = search.substring(8);
     console.log(search)

    var url = 'https://api.themoviedb.org/3/search/movie?';
    const apiKey = "api_key=3aba18b4b741b327b46e5373e09a48f7";
    var userQuery = "&query="+search;
    
    Request.get(url+apiKey+userQuery).then((response) => {
      this.setState({
          movies: response.body.results,
          
      });
    //console.log(this.state.movies)
    });
  }

  render() {
        //console.log(this.state.movies);
     var movies = _.map(this.state.movies, (movies,i) => {
         return <li key={i}>
                    <Link to={"/Moviedetails/?id="+movies.id}>
                    {movies.title}</Link> : {movies.release_date}
                </li>
     });
    return (
     <div className="container">
         <div className="info_movies_search_page">
            <h1>
                Search results
            </h1>

            
            <div>
                <ul>{movies}</ul>
            </div>
        </div>
        
    </div>
    );
  }
}

export default Search;