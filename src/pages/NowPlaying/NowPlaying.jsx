import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Card from "../../components/Card/Card"
import { setLoading } from "../../store/actionCreators/movieCreator"
import { fetchNowPlayingMovies } from "../../store/actions"
import axios from 'axios'
const api_key = "4b993439c6b0bca32c94dc6bcbf5487e"


export default function NowPlaying(){
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(state => state.movies)
    const [movies, setMovies] = useState([])
    const loading = useSelector(state => state.loading)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        axios({
            method:"GET",
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`
        })
        .then((response) =>{
            dispatch(setLoading(true))
            setMovies(prevMovies => {
                return [...prevMovies, ...response.data.results]
            })
            console.log(response.data.results);
            console.log(movies);
            setTimeout(()=>{
                dispatch(setLoading(false))
            }, 1000)
        })


    }, [page])

    return (
        <div>
        <InfiniteScroll 
        dataLength={movies.length}
        next={()=>setPage(page+1)}
        hasMore={true}
        >
            {
                loading? (
                    <p>Now Loading</p>
                ) : (
                    <div className="row">
                        {
                            movies.map(movie =>{
                                return (
                                    <div className="col-3">
                                        <Card
                                            key={movie.id}
                                            movie={movie}
                                        />
                                    </div>

                                )
                            })
                        }
                    </div>
                )
            }
        </InfiniteScroll>

        </div>
    )
}
