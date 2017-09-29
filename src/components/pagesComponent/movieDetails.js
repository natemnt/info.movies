import React, {Component} from 'react';
import Request from 'superagent';
import Videolinks from '../formsComponent/videoLink';
import _ from 'lodash';
import {Link} from 'react-router-dom';

//movie component
class Moviedetails extends Component {
    constructor(){
    super();
    this.state = {};
  }
  
  componentWillMount(){
    var {search} = this.props.location;

    search = search.substring(4);
//console.log(search);
   
    var apiKey = "?api_key=3aba18b4b741b327b46e5373e09a48f7&append_to_response=credits";
    var url = "https://api.themoviedb.org/3/movie/";

/*State is not set at the time within render function*/
    Request.get(url+search+apiKey).then((response) => {
        //console.log(response.body);
        //console.log(response.body.backdrop_path)
        this.setState({
            films: response.body
        });
    });
  }
 componentDidMount(){}

  componentWillReceiveProps(nextProps){

  }
  componentWillUpdate(nextProps, nextState){

  }

  
 
  render() {
      /*if statement to check if state is not defined displays data when state is set*/
      if(!this.state.films){
        return <div></div>
      }else{
        var movieDetails = this.state.films;
        //console.log(this.state.films);
        var idKey = this.state.films.id;

        var movieCompanies = _.map(movieDetails.production_companies,(movieCompanies) =>{
            return <span key={movieCompanies.id}>{movieCompanies.name} </span>
        });
            
        var movieCast = _.map(movieDetails.credits.cast,(movieCast) =>{
            if(movieCast.profile_path === null){
                return(<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-xxs-12">
                <Link to={'/Cast/?id='+movieCast.id}><div key={movieCast.id}>{movieCast.name}</div></Link>
                <img src={require('../../Assets/images/profile.png')}
                    alt="a film cast member" className="img-responsive"/>
            </div>
                
                )
            }
            console.log(movieCast)
            return (<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-xxs-12">
                    <Link to={'/Cast/?id='+movieCast.id}><div key={movieCast.id}>{movieCast.name}</div></Link>
                   
                <img key={movieCast.cast_id} src={'http://image.tmdb.org/t/p/w185'+movieCast.profile_path} 
                    alt="a film cast member" className="img-responsive"/>
                </div>
            )
                    
        })
        //console.log(movieDetails);
      }
     

      
    return (
     <div className="container">
         
        <div className="row fh5co-post-entry single-entry">

            <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                <h1>Details</h1>
            <figure className="animate-box">
                <img src={'http://image.tmdb.org/t/p/w185'+movieDetails.poster_path} 
                    alt="movie poster" className="img-responsive"/>
            </figure>
        
                <Videolinks movieId={idKey}/>
                
            <h3 className="fh5co-article-title animate-box">{movieDetails.original_title}</h3>
        <p className="info_movies__details_desc">
          Synopsis: {movieDetails.overview}
        </p>
        <p className="info_movies__details_desc">Release date: {movieDetails.release_date}</p>
        <p className="info_movies__details_desc">Duration: {movieDetails.runtime}minutes</p>
        <p className="info_movies__details_desc">Production Companies: {movieCompanies}</p>
        <p className="info_movies__details_desc">Budget: ${movieDetails.budget}</p>

        
            <p>Cast</p>
            
            {movieCast}
        
           
            
        </div>
        </div>
    </div>
    );
  }
}



export default Moviedetails;