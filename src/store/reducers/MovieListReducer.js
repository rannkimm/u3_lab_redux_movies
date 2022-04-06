const { MOVIE_LOADING_TYPE, GET_MOVIE_LIST,} = require('../types')

const iState = {
    movieList: [],
    moviesLoading: ''
}

const MovieListReducer = (state = iState, action) => {
    switch (action.type) {
        case MOVIE_LOADING_TYPE:
            return { ...state, movieLoading: action.payload}
        case GET_MOVIE_LIST: 
            return { ...state, movieList: action.payload}
        default:
            return { ...state }
    }
}

export default MovieListReducer