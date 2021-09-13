const {SET_LOADING, SET_ERROR, SET_MOVIES, SET_SIMILAR_MOVIES, SET_DETAIL, SET_LATEST} = require("../actionTypes/movieType")

export function setLoading(input){
    return (dispatch) =>{
        dispatch({
            type:SET_LOADING,
            payload: input
        })
    }
}
 
export function setError(input){
    return (dispatch) =>{
        dispatch({
            type: SET_ERROR,
            payload: input
        })
    }
}

export function setLatest(input){
    return (dispatch) =>{
        dispatch({
            type: SET_LATEST,
            payload: input
        })
    }
}

export function setMovies(input){
    return (dispatch) =>{
        dispatch({
            type: SET_MOVIES,
            payload: input
        })
    }
}

export function setSimilarMovies(input){
    return (dispatch) =>{
        dispatch({
            type: SET_SIMILAR_MOVIES,
            payload: input
        })
    }
}

export function setDetail(input){
    return(dispatch) =>{
        dispatch({
            type: SET_DETAIL,
            payload: input
        })
    }
}