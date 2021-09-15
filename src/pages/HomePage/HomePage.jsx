import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setLoading } from "../../store/actionCreators/movieCreator"
import { fetchLatestMovie } from "../../store/actions"
import styles from "./HomePage.css"

export default function HomePage(){
    const dispatch = useDispatch()
    const latestMovie = useSelector(state=>state.latest)
    const loading = useSelector(state => state.loading)
    useEffect(()=>{
        dispatch(setLoading(true))
        dispatch(fetchLatestMovie())
        setTimeout(()=>{
            dispatch(setLoading(false))
        }, 1000)
    }, [])
    return(
        <>
            {
                loading? (
                    ""
                ) : (
                    <div class="container-announcer row justify-content-center">
                        <div className="latest-movie-sign">
                            <p className="mt-5" style={{textAlign:"center"}}>Latest Movie</p>
                        </div>
                        <div class="container-latest-play rounded col-4 mx-auto mt-5">
                            <br></br>
                            <h1 style={{textAlign:"center"}}>{latestMovie.original_title}</h1>
                            <div class=" mx-auto">
                                {latestMovie.backdrop_path? (
                                    <img class="image-container rounded mx-auto d-block" src={`https://image.tmdb.org/t/p/w500/${latestMovie.backdrop_path}`} alt=""/>
                                ) : (
                                    <img class="image-container rounded mx-auto d-block" src={`https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png`} alt=""/>
                                )
                            }
                            </div>
                            <div class="body-container mt-5">
                                {
                                    latestMovie.overview? (
                                        <p style={{textAlign:"center"}}>{latestMovie.overview}</p>
                                    ) : (
                                        <p style={{textAlign:"center"}}>Synposis not available</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) 
            }
            

        </>
    )
}
