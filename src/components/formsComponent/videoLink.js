import React, {Component} from 'react';
import Request from 'superagent';
import ModalVideo from 'react-modal-video';



//video component
class Videolinks extends Component{
    constructor(props){
        super(props);
        //console.log(this.props.movieId);
        this.state ={
            isOpen:false
        };

       this.onClickVideo = this.onClickVideo.bind(this);
    
    }

componentWillMount(){
    var url = "https://api.themoviedb.org/3/movie/";
    var apiKey = "?api_key=3aba18b4b741b327b46e5373e09a48f7&language=en-US";
    //fix this line passing props from parent
    var filmId = this.props.movieId;
    Request.get(url+filmId+"/videos"+apiKey).then((video) => {
       // console.log(video.body.results[0]);
       //if statement to check if results array is undefined
        if(video.body.results !== undefined && video.body.results[1] !== undefined){
        this.setState({
            trailer: video,
            videoKey: video.body.results[1].key
        });
    }else if(video.body.results !== undefined && video.body.results[0] !== undefined){
        this.setState({
            trailer: video,
            videoKey: video.body.results[0].key
        });
    }
        //console.log(this.state.trailer.body.results[1].key);
    });
}
onClickVideo(){
    this.setState({
        isOpen:true
    });
    
    
  
}

    render() {
        var val = this.state.isOpen;
        //console.log(this.state.isOpen);
        //console.log(val);
        return (
            <div>
                <ModalVideo channel='youtube' ref="playTrailer" isOpen={val} videoId={this.state.videoKey}/>
                <button className="btn trailer-btn" ref="trailer" 
                        onClick={this.onClickVideo}>View the trailer</button>
                
            </div>
        );   
  }

}

export default Videolinks;