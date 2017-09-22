import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';


class Search extends Component {

  constructor(props){
      super(props);
      this.state = {value: ''};
      this.focus = this.focus.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
      this.setState({value: event.target.value});
  }

  handleSubmit(event){
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=3aba18b4b741b327b46e5373e09a48f7&query='+this.state.value;
      
      Request.get(url).then((response) => {
        this.setState({
            movies: response.body.results,
            
        });
      //console.log(this.state.movies)
      });
      
      
      //alert('Movie searched: ' + this.state.value);
      event.preventDefault();
  }

   focus(){
      this.textInput.focus();
  }



  render() {

     var movies = _.map(this.state.movies, (movies) => {
         return <li key={movies.id}><Link to={"/Moviedetails/?id="+movies.id}>{movies.title}</Link> : {movies.release_date}</li>
     });

    return (
     <div className="container-fluid">

        <h1>
            What's your favorite movie?
        </h1>

        
         <div>
     <form onSubmit={this.handleSubmit} className="form-group">
         <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8">
                Type a movie:
                <input type="text" value={this.state.value} ref={(input) => {this.textInput = input}}
                    onChange={this.handleChange} className="form-control" onClick={this.focus}/>
            </div>
         </div>
         <div className="top-buffer"></div>
         <div>
            <input type="submit" className="btn" value="Search"/>
         </div>
     </form>
        <ul>{movies}</ul>
    </div>
        
         </div>
    );
  }
}

export default Search;