import {setDetail, setMovies, setSimilarMovies, setLatest} from "../actionCreators/movieCreator"
import axios from "axios"
const api_key = "4b993439c6b0bca32c94dc6bcbf5487e"

export function fetchLatestMovie(){
    return(dispatch, getState) =>{
        
        axios({
            method: 'GET', 
            url: `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`
        }) 
        .then((response) =>{
            dispatch(setLatest(response.data))
        })
    }
}

export function fetchNowPlayingMovies(page){
    return(dispatch, getState) =>{

    }
}

export function fetchSimilarMovies(movieId){
    return(dispatch, getState) =>{
        axios({
            method:"GET",
            url:`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}`
        })
        .then((response) =>{
            dispatch(setSimilarMovies(response.data.results))
        })
    }
}