import { useEffect } from "react"
import styles from './Detail.css'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setLoading, setSimilarMovies } from "../../store/actionCreators/movieCreator"
import { fetchNowPlayingMovies, fetchSimilarMovies } from "../../store/actions"
import { useParams } from 'react-router-dom'
import SimilarCard from "../../components/SimilarCard/SimilarCard"

export default function Detail(){
    const dispatch = useDispatch()
    const detailMovie = useSelector(state=> state.detail)
    const similarMovies = useSelector(state=> state.similarMovies)
    const loading = useSelector(state => state.loading)
    const { id } = useParams()
    useEffect(()=>{
        dispatch(setLoading(true))
        dispatch(fetchSimilarMovies(detailMovie.id))
        setTimeout(()=>{
            dispatch(setLoading(false))
            console.log(detailMovie)
        }, 1000)
    }, [id])

    return (
        <>
            <div className="detail mx-auto">
                <div className="detail-box-container mx-auto">
                    <div className="d-flex">
                        <div className="image-container mx-auto mt-5">
                            <img src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} className="detail-img" alt=""/>
                        </div>
                        <div className="detail-card py-5 px-5 mt-5 me-3">
                            <div className="detail-title mt-3">
                                <h3>{detailMovie.title} - {detailMovie.release_date}</h3>
                            </div>
                            <div className="detail-body mt-3">
                                <p className="detail-overview">{detailMovie.overview}</p>
                            </div>
                            <div className="detail-button mb-auto d-flex justify-content-between mt-5">
                            <div className="detail-popularity d-flex">
                                <div className="d-flex">
                                    <button className="popularity-rating btn rounded-circle">
                                        {detailMovie.vote_average}
                                    </button>
                                    <p className="ms-3 my-auto user-rating">User Rating</p>
                                </div>
                            </div>
                                {/* <button className="button-icon btn btn-primary my-auto ms-3" onClick={() => addToFavorit()}>
                                    <i class="fas fa-plus"></i>
                                </button>
                                <button className="button-icon btn btn-primary my-auto" onClick={() => history.push(`/editContent/${id}`)}>
                                    <i class="far fa-edit"></i>
                                </button>
                                <button className="button-icon btn btn-primary my-auto" onClick={() => deleteMovieData()}>
                                    <i class="fas fa-trash"></i>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="similar-movie-container mb-5">
                <div className="row">
                    {
                        similarMovies.map((movie, index) => {
                            if(index< 6){
                                return (
                                    <div className="similar-movie-card">
                                        <SimilarCard
                                            key={movie.id}
                                            movie={movie}
                                        />
                                    </div>
                                )
                            }
                        })
                        
                    }
                </div>
            </div>
        </>
    )
}
