import Rebase from 're-base';
import * as firebase from 'firebase';
/*var config = {
    // Initialize Firebase
      apiKey: "AIzaSyCmpgIoUQ6z0EHtcAPtSTNKjFOBWkwDAtM",
      authDomain: "humber-admin-83115.firebaseapp.com",
      databaseURL: "https://humber-admin-83115.firebaseio.com",
      projectId: "humber-admin-83115",
      storageBucket: "humber-admin-83115.appspot.com",
      messagingSenderId: "353235675267"
    
  }*/
  const config = {
      // Initialize Firebase
      apiKey: process.env.REACT_APP_FIREBASE_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  }

  const app =  firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())
  const facebookProvider = new firebase.auth.FacebookAuthProvider()

  export {app, base, facebookProvider}
