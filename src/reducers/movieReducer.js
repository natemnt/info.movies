import Constants from '../constant';

export default function movieReducer(state=[], action){
    switch(action.type){
        case Constants.SEARCH_MOVIE:
            return [...state,
                Object.assign([], action.movie)];
        case Constants.GET_UPCOMING_MOVIES_SUCCESS:
            return action.movies;
        case Constants.GET_NOW_PLAYING_SUCCESS:
                return action.nowPlaying;
        default:
            return state;
    }
}