import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import {getUpcomingMovies, getNowplayingMovies} from './actions/movieActions';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const store = configureStore();

store.dispatch(getUpcomingMovies());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
