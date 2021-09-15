import { useHistory, useLocation } from 'react-router-dom'
import styles from './Card.css'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { setDetail } from '../../store/actionCreators/movieCreator'

export default function Card(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    
    function movieDetail(movie){
        dispatch(setDetail(movie))
        history.push(`/movie/${movie.id}`)
    }

    return (
        <>
            <div class="card-container mx-1 my-2 rounded" >
                <div className="d-flex flex-row-reverse">
                    {
                        location.pathname === "/favorites" ? (
                            <button style={{color: 'black'}}  className="btn"><i class="far fa-times-circle fa-2x"></i></button> ) : (
                                ""
                            )
                    }
                </div>
                <div className="card-inner-container my-2 mx-2">
                    <a onClick={()=> movieDetail(props.movie)} class="btn"  href="#">
                        <div class="">
                                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} className="card-img" alt=""/>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}


