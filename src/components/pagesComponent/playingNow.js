import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Modal from 'react-modal';

Modal.setAppElement('#root')


export default class Playingnow extends Component{

    constructor(props){
        super(props);
        this.state={
            showModal:false,
            apiKeyImg:'?api_key=wsrs7xunzk7dhmwxc8xjt2dg',
            venues:''
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
            //console.log(response.body)
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
            //function to retrieve index of an array
            function myIndex(collection,target){  
                for(var val=0; val<collection.length; val++){
                    if(collection[val] === target){
                        return val;
                    }
                }
                return -1;
            }//end of function
            /*You have to check index on button click if they match, if true then display appropriate venues and times for films */


            var shows = _.map(filmsVenues,(shows,e)=>{
                //console.log(filmsVenues.length)

                var filmShow
                var showTime
                for(var i =0; i<shows.showtimes.length; i++){

                    filmShow= shows.showtimes[i].theatre.name;
                    showTime= shows.showtimes[i].dateTime;

                }
                
               // var theatres = shows.showtimes
                
                    //var venIndex = theatres.length - 1;
                    // var venues=theatres[venIndex]
                     //console.log(theatres.length)
                     //console.log(myIndex(filmsVenues,shows))
                
                return  <tr key={e}>
                            <td>
                            {filmShow}
                            </td>
                            <td>{showTime}</td>
                        </tr>
            })
               
        }
        return(
            <div className="container">
                <div>{filmsVenues.map((item,key)=>{
                    var castNames=item.topCast.toString();
                    
                    return(
                        <span key={key} className="info_movies__card col-lg-3 col-md-3 col-sm-3 col-xs-4 col-xxs-4">
                        
                        <p>{item.title}</p>
                        <h4>Cast</h4>
                        {!castNames ? <div></div> : <div style={{fontSize:12+'px'}}>{castNames}</div>}
                        
                        <button className="btn info_movies__showtime_btn"
                                onClick={this.handleOpenModal}
                                >View Showtimes</button>
                                
                                
                    </span>
                    )
                })}
                </div>
                <Modal
                        isOpen={this.state.showModal}
                        contentLabel="Now Playing"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay">
                    <button onClick={this.handleCloseModal}>Close</button>
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th>Cinema</th><th>Date/Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shows}
                            </tbody>
                        </table> 
                </Modal>
            </div>
        )
    }
}

 

