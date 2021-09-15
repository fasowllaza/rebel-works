import { useEffect } from "react"
import styles from './Detail.css'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setLoading, setSimilarMovies } from "../../store/actionCreators/movieCreator"
import { fetchNowPlayingMovies, fetchSimilarMovies } from "../../store/actions"
import { useParams } from 'react-router-dom'
import SimilarCard from "../../components/SimilarCard/SimilarCard"
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed"

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
        }, 1000)
    }, [id])

    return (
        <>
            {
                loading? (
                    ""
                ) : (
                    <div className="detail mx-auto">
                        <img src={`https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`} className="detail-backdrop position-absolute" alt=""/>
                        <div classname="detail-box position-relative">
                            <div className="detail-box-container mx-auto">
                                <div className="d-flex">
                                    <div className="image-container mx-auto mt-2">
                                        <img src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} className="detail-img rounded" alt=""/>
                                    </div>
                                    <div className="detail-card py-5 px-5 mt-2 me-3">
                                        <div className="detail-title mt-3">
                                            <h3>{detailMovie.title}</h3>
                                        </div>
                                        <div className="detail-body mt-3">
                                            <p className="detail-overview">{detailMovie.overview}</p>
                                        </div>
                                        <div className="detail-button mb-auto d-flex justify-content-between mt-5">
                                            <div className="detail-popularity d-flex">
                                                <div className="d-flex">
                                                    <button className="popularity-rating btn rounded-circle">
                                                        {detailMovie.vote_average.toFixed(1)}
                                                    </button>
                                                    <p className="ms-3 my-auto user-rating">User Rating</p>
                                                </div>
                                            </div>
                                        <div>
                                            <p>Movie Released</p>
                                            <p>{detailMovie.release_date}</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        {/* <YoutubeEmbed embedId="eg5ciqQzmK0" /> */}
                                    </div>
                                </div>
                            </div>
                            <div class="similar-movie-container">
                                <br></br>
                                <div className="similar-text ms-5">
                                    <p className="1">Similar Movies</p>
                                </div>
                                <div className="scrollmenu">
                                    {
                                        similarMovies.map((movie, index) => {
                                            return (
                                                <div className="similar-movie-card">
                                                    <SimilarCard
                                                        key={movie.id}
                                                        movie={movie}
                                                    />
                                                </div>
                                            )
                                        })
                                        
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
