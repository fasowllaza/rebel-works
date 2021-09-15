import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useSelector } from "react-redux";

export default function Authentication(){

    const api_key = useSelector(state => state.api_key)
    const redirect_site = useSelector(state => state.redirect_state)

    const createSession = () =>{
        axios({
            method:"GET",
            url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`
        })
        .then((response) =>{
            const request_token = response.data.request_token
            window.open(`https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${redirect_site}`)
        })

    }

    return(
        <>
            <Button onClick={()=> createSession()} variant="warning">Create Session</Button>{' '}
        </>
    )
}
