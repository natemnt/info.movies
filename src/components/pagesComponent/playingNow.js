import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Modal from 'react-modal';

Modal.setAppElement('#root')
class Playingnow extends Component{

    constructor(){
        super();
        this.state={
            showModal:false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentWillMount(){
        var todayDate = new Date().toISOString().slice(0,10);
        const url = "http://data.tmsapi.com/v1.1/movies/showings?";
        var zipCode = "&zip=M3L1P3";
        const apiKey = "&api_key=wsrs7xunzk7dhmwxc8xjt2dg";
        
        Request.get(url+'startDate='+todayDate+zipCode+apiKey).then((response) =>{

            this.setState({
                films:response.body
            })
            console.log(response.body)
        })
        
    }

    handleOpenModal(){
        this.setState({showModal:true})
    }

    handleCloseModal(){
        this.setState({showModal:false})
    }

    render(){

        if(!this.state.films){
            return <div></div>

        }else{
            var filmsVenues = this.state.films

            var movies = _.map(filmsVenues,(movies)=>{
                //console.log(movies.topCast[])
                var castNames=movies.topCast;
                {
                var venues = _.map(movies.showtimes,(venues,i)=>{
                    //console.log(venues)
                    return( 
                    <Modal
                        isOpen={this.state.showModal}
                        contentLabel="Now Playing"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                        key={i}
                    >
                        <p>{venues.theatre.name}</p>
                        <button onClick={this.handleCloseModal}>
                            Close</button>
                    </Modal>
                    )
                })
            }
                return <span key={movies.tmsId} className="info_movies__card col-lg-3 col-md-3 col-sm-3 col-xs-4 col-xxs-4">
                    <p>{movies.title}</p>
                    <div>Cast</div>
                    {!castNames ? <div></div> : <div>{castNames}</div>}
                    
                    <button className="btn info_movies__showtime_btn"
                            onClick={this.handleOpenModal}
                            >View Showtimes</button>
                    <div>{venues}</div>
                </span>
            })

           
        }
        return(
            <div className="container">
                <div>
                    {movies}
                </div>
            </div>
        )
    }
}

export default Playingnow;