import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import * as firebase from 'firebase';
var config = {
    // Initialize Firebase
      apiKey: "AIzaSyCmpgIoUQ6z0EHtcAPtSTNKjFOBWkwDAtM",
      authDomain: "humber-admin-83115.firebaseapp.com",
      databaseURL: "https://humber-admin-83115.firebaseio.com",
      projectId: "humber-admin-83115",
      storageBucket: "humber-admin-83115.appspot.com",
      messagingSenderId: "353235675267"
    
  }
  
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
