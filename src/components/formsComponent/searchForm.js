import React,{Component} from 'react'
import Request from 'superagent';
import {Redirect} from 'react-router';

export default class Searchform extends Component{

    constructor(){
        super();
        this.state={
            value:'',
            postcode:'',
            fireRedirect:false
    }

        this.focus = this.focus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeP=this.handleChangeP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleChangeP(event){
        this.setState({postcode:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        var url = 'https://api.themoviedb.org/3/search/movie?';
        const apiKey = "api_key=3aba18b4b741b327b46e5373e09a48f7";
        var userQuery = this.state.value;
        const userPostcode = this.refs.userPostcode.value;
        console.log(userPostcode);
          this.setState({
              movies: userQuery,
              fireRedirect:true,
              value:'',
              postcode:''
          });
        //console.log(this.state.movies)
      
        
        //alert('Movie searched: ' + this.state.value);
    }

    focus(){
        this.textInput.focus();
    }

    render(){

        var movies=this.state.movies;
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} ref={(input) => {this.textInput = input}}
                            onChange={this.handleChange} onClick={this.focus} placeholder="type a movie"
                            className="info_movies_query"/> 

                    <input type="text" value={this.state.postcode} ref="userPostcode" 
                            placeholder="please enter postcode" onChange={this.handleChangeP}
                            className="info_movies_postcode"/>

                    <input type="submit" className="btn info_movies__search_btn" value="Search"/>
                </form>
                {this.state.fireRedirect &&(
                    <Redirect to={'/Search/?movies='+movies}/>
                )}
            </div>
        )
    }
}