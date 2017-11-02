import Constants from '../constant';
import {movieApi} from '../api/tmdbUrl';
import Request from 'superagent';

/*movie action creator functions */
export function searchMovie(movie){
    return {type: Constants.SEARCH_MOVIE, movie}
}
/*get movies action creators */
export function getMoviesSuccess(movies){
    return {type: Constants.GET_UPCOMING_MOVIES_SUCCESS, movies}
}

/*get now playing action creator */
export function getNowPlayingSuccess(nowPlaying){
    return {type:Constants.GET_NOW_PLAYING_SUCCESS, nowPlaying}
}

export function getUpcomingMovies(){
    return function(dispatch){
            const url = movieApi.url + movieApi.movie + movieApi.upcoming + movieApi.apiKey + movieApi.languageUs + movieApi.page + '1';
        return Request.get(url).then(movies =>{
            dispatch(getMoviesSuccess(movies.body.results));
        }).catch(error =>{
            throw(error);
        });
    }
}

export function getNowplayingMovies(){
    return function(dispatch){
        const url = movieApi.url + movieApi.movie + movieApi.nowPlaying + movieApi.apiKey + movieApi.languageUs + movieApi.page + '1';
        return Request.get(url).then(nowPlaying =>{
            dispatch(getNowPlayingSuccess(nowPlaying.body.results));
        }).catch(error =>{
            throw(error);
        })
    }
}