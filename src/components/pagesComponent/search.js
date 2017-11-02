import React, {Component} from 'react';
//import Request from 'superagent';
//import _ from 'lodash';
//import {Link} from 'react-router-dom';


class Search extends Component {

  constructor(props){
      super(props);
      this.state = {};

      console.log(props)
  }



  render() {

   // var {search} = this.props.location;
   // var films = search.substring(8);

        //console.log(this.state.movies);
    /* var movies = _.map(films, (movies,i) => {
         return <li key={i}>
                    <Link to={"/Moviedetails/?id="+movies.id}>
                    {movies.title}</Link> : {movies.release_date}
                </li>
     });*/
    return (
     <div className="container">
         <div className="info_movies_search_page">
            <h1>
                Search results
            </h1>

            
            <div>
               {/*} <ul>{movies}</ul>{*/}
            </div>
        </div>
        
    </div>
    );
  }
}

export default Search;