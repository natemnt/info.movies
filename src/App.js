import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {base, app} from './base';

//components
import Header from './components/headerComponent/header';
import Logout from './components/formsComponent/logout';
import Footer from './components/footerComponent/footer';
import Registration from './components/formsComponent/registrationForm';
import Homepage from './components/pagesComponent/homePage';
import Newrelease from './components/pagesComponent/newRelease';
import Playingnow from './components/pagesComponent/playingNow';
import Boxoffice from './components/pagesComponent/boxOffice';
import Search from './components/pagesComponent/search';
import Moviedetails from './components/pagesComponent/movieDetails';
import Cast from './components/pagesComponent/castDetails';
import Dashboard from './components/pagesComponent/dashboard';

//includes
import './Assets/css/default.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
        authenticated:false,
        loading:true
    }
    
  }
  
  componentWillMount(){
    this.removeAuthListner = app.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({authenticated:true,
                        loading:false,
                        userInfo:user})
      console.log(user)
      }else{
        this.setState({authenticated:false, loading:false})
      }
    })
  }

  componentWillUnmount(){
    this.removeAuthListner()
  }

  render() {
    if (this.state.userInfo == null){
     <div></div> 
    }
    const info = this.state.userInfo
    //console.log(info)
    if(this.state.loading === true){
      return(
        <div style={{textAlign:"center", position:"absolute",
                     top:25+'%', left:50+'%'}}>
          <h3>Loading</h3>
          <div className="progress">
            <div className="progress=bar" style={{width:25+'%'}}
                  aria-valuenow="50"aria-valuemin="0" aria-valuemax="100">
              </div>
          </div>
        </div>
      )
    }
    return (
      <Router>
      <div className="App">
        <div className="wrapper">
        <Header authenticated={this.state.authenticated}/>
          <div className="content">
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/info.movies' component={Registration}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/Newrelease' component={Newrelease}/>
          <Route exact path='/Playing_Now' component={Playingnow}/>
          <Route exact path='/Boxoffice' component={Boxoffice}/>
          <Route exact path='/Search' component={Search}/>
          <Route exact path='/Moviedetails' component={Moviedetails}/>
          <Route exact path='/Cast' component={Cast}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        <Footer/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
