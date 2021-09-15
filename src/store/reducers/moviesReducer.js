import {SET_ERROR, SET_LOADING, SET_MOVIES, SET_SIMILAR_MOVIES, SET_DETAIL, SET_LATEST} from "../actionTypes/movieType"

const initialState = {
    movies: [],
    similarMovies: [],
    detail: {},
    latest: {},
    api_key: "4b993439c6b0bca32c94dc6bcbf5487e",
    redirect_state: "http://localhost:3000/redirect",
    isLoading: true,
    error: null
}

function moviesReducer(state= initialState, action){
    if (action.type === SET_LOADING) {
        return {...state, isLoading: action.payload}
    } else if (action.type === SET_ERROR) {
        return {...state, error: action.payload}
    } else if (action.type === SET_MOVIES) {
        return {...state, movies: action.payload}
    } else if (action.type === SET_SIMILAR_MOVIES){
        return {...state, similarMovies: action.payload}
    } else if(action.type === SET_DETAIL) {
        return {...state, detail: action.payload}
    } else if(action.type === SET_LATEST) {
        return {...state, latest: action.payload}
    } return state
}

export default moviesReducer