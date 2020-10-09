import React, { useState, useEffect } from "react";
import axios from "axios"
import NasaCard from "./NasaCard"

export default function NasaList() {

    const [nasa, setNasa] = useState({});

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yqma65DndVP3U09At4k7e5CfEuogT7Nz8ZbwFU5X')
        .then(response => {
            console.log(response.data);
            setNasa(response.data);
        })
        .catch(error => {
            console.log('Houston we have an error', error)
        })
    }, [])
    return (
        <div className="nasa">
            <NasaCard 
                title={nasa.title}
                date={nasa.date}
                copyright={nasa.copyright}
                exp={nasa.explanation}
                img={nasa.url}
                />
        </div>  
    );
}