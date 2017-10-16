import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';


class Search extends Component {

  constructor(props){
      super(props);
      this.state = {value: '',
                    movies:{}};
      this.focus = this.focus.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
      this.setState({value: event.target.value});
  }

  handleSubmit(event){
      var url = 'https://api.themoviedb.org/3/search/movie?';
      const apiKey = "api_key=3aba18b4b741b327b46e5373e09a48f7";
      var userQuery = "&query="+this.state.value;
      
      Request.get(url+apiKey+userQuery).then((response) => {
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
        //console.log(this.state.movies);
    var filteredMovies = !this.state.movies ? this.state.movies.filter((film)=>{
            return film.title.indexOf(this.state.value) !== -1
        }
        
    )
    : ['none']/*This needs to be worked on */

     var movies = _.map(this.state.movies, (movies,i) => {
         return <li key={i}>
                    <Link to={"/Moviedetails/?id="+movies.id}>
                    {movies.title}</Link> : {movies.release_date}
                </li>
     });
     

     /*And this as well */
     var filteredSearch = _.map(filteredMovies,(results,j)=>{
       
         return <p key={j}>
                    {results.title}
             </p>
     })
    
    return (
     <div className="container">

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
         
            <input type="submit" className="btn info_movies__search_btn" value="Search"/>
         
     </form>
        <div>{filteredSearch}</div>
        <ul>{movies}</ul>
    </div>
        
         </div>
    );
  }
}

export default Search;