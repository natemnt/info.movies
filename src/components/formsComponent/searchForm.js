import React,{Component} from 'react'
import Request from 'superagent';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions'
//continue redux tutorial
class Searchform extends Component{

    constructor(){
        super();
        this.state={
            value:'',
            postcode:''
    }

        this.focus = this.focus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeP=this.handleChangeP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filmRow=this.filmRow.bind(this);
        this.onClickSave=this.onClickSave.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleChangeP(event){
        this.setState({postcode:event.target.value});
    }

    onClickSave(){
        this.props.actions.searchMovie(this.state.value);
    }

    handleSubmit(event){
        event.preventDefault();
        
        var userSearch = this.state.value;

        this.context.router.history.push('/Search')

        /*var url = 'https://api.themoviedb.org/3/search/movie?';
        const apiKey = "api_key=3aba18b4b741b327b46e5373e09a48f7";
        var userQuery = "&query="+userSearch;*/

       /* Request.get(url+apiKey+userQuery).then((response) => {
            this.setState({
                movies: response.body.results,
                fireRedirect:true,
                value:'',
                postcode:''     
            });
          //console.log(this.state.movies)
          });*/
        //const userPostcode = this.refs.userPostcode.value;
        //console.log(userPostcode);

        //console.log(this.state.movies)
      
        
       // alert('Movie searched: ' + this.state.fireRedirect);
    }

    focus(){
        this.textInput.focus();
    }

    filmRow(movie, index){
        return <div key={index}>{movie}</div>;
    }

    

    render(){
        //console.log(this.props.movies)
        var movies=this.state.movies;
        return(
            <div className="container">
               {/*} <div>{this.props.movies.map(this.filmRow)}</div> {*/}
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} ref={(input) => {this.textInput = input}}
                            onChange={this.handleChange} onClick={this.focus} placeholder="type a movie"
                            className="info_movies_query"/> 

                    <input type="text" value={this.state.postcode} ref="userPostcode" 
                            placeholder="postcode" onChange={this.handleChangeP}
                            className="info_movies_postcode" />

                    <input type="submit" className="btn info_movies__search_btn" 
                            value="Search" onClick={this.onClickSave}/>
                </form>
            </div>
        )
    }
}

Searchform.contextTypes = {
    router:PropTypes.object
}

function mapStateToProps(state, ownProps){
    return{
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(movieActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchform)