import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";




export default function Redirect(){
    const [timer, setTimer] = useState(10)
    let history = useHistory();

    useEffect(()=>{
        if(timer >0) {
            setTimeout(()=> setTimer(timer-1), 500)
        } else{
            const queryParams = new URLSearchParams(window.location.search)
            for(const query of queryParams) {
                if(query[0]==="request_token"){
                    localStorage.setItem("request_token", query[1])
                }
            }
            history.push("/home")
        }
    })

    return(
        <>
            <h1>Page will be redirected in 5 second</h1>
        </>
    )
}
