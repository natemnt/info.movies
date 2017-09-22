import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class Cast extends Component{

    constructor(){
        super();
        this.state={}
    }

    componentWillMount(){

        var {search} = this.props.location;
        
            search = search.substring(4);
        //console.log(search);

        var apiKey = "?api_key=3aba18b4b741b327b46e5373e09a48f7&append_to_response=movie_credits";
        var url = "https://api.themoviedb.org/3/person/";

        Request.get(url+search+apiKey).then((response) =>{
            //console.log(response.body)
            this.setState({
                cast: response.body
            })
        })
    }

   
    render(){

        if(!this.state.cast){
          return  <div></div>
        }else{

            var castDetails = this.state.cast
            var gender
            
            castDetails.gender === 1 ? gender = "Female" : gender = "Male"
        }

        var movieCredits = _.map(castDetails.movie_credits.cast,(movieCredits) => {
                        //console.log(movieCredits)
                        return(
                                <tr>
                                    <td>{movieCredits.release_date}</td>
                                    <td><Link to={'/Moviedetails/?id='+movieCredits.id}>{movieCredits.original_title}</Link></td>
                                    <td>{movieCredits.character}</td>
                                </tr>
                        )
        })
        return(
            <div className="container">
                <div className="top-buffer"></div>
                <div className="row">
                    <div className="col-lg-offset-2 col-lg-4 col-md-4 col-sm-6">
                        <img src={'http://image.tmdb.org/t/p/w185'+castDetails.profile_path} alt="a film cast member"/>
                        <h1>{castDetails.name}</h1>
                        <p>Birthday: {castDetails.birthday}</p>
                        <p>Place of Birth: {castDetails.place_of_birth}</p>
                        <p>Gender: {gender}</p>
                        <p>Also known as: {castDetails.also_known_as[0]}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <h3>Biograghy: </h3><hr/>
                            <p>{castDetails.biography}</p>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-offset-2">
                        <p>Filmography</p>
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th>Release date</th>
                                    <th>Film title</th>
                                    <th>Character played</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movieCredits}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="top-buffer"></div>
                
            </div>
        )
    }
}

export default Cast;