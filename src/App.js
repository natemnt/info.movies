import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Registration from './components/formsComponent/registrationForm';
import Homepage from './components/pagesComponent/homePage';
import Newrelease from './components/pagesComponent/newRelease';
import Boxoffice from './components/pagesComponent/boxOffice';
import Search from './components/pagesComponent/search';
import Moviedetails from './components/pagesComponent/movieDetails';
//includes
import './Assets/css/default.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';


class App extends Component {

  constructor(){
    super();
    this.state={
        authenticated:false
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
        
        <Header authenticated={this.state.authenticated}/>

          <Route exact path='/' component={Homepage}/>
          <Route exact path='/info.movies' component={Registration}/>
          <Route exact path='/Newrelease' component={Newrelease}/>
          <Route exact path='/Boxoffice' component={Boxoffice}/>
          <Route exact path='/Search' component={Search}/>
          <Route exact path='/Moviedetails' component={Moviedetails}/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;