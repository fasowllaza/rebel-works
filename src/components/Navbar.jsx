import {useHistory} from "react-router-dom"


export default function Navbar(){
    const history = useHistory()
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" >
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div className="col">
                            <a style={{textAlign:"center"}} class="nav-link" onClick={() => history.push('/home')} href="#">Home</a>
                        </div>
                        <div className="col">
                            <a style={{textAlign:"center"}} class="nav-link" onClick={() => history.push('/nowPlaying')} href="#">Now Playing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}