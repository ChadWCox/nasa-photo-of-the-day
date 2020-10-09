import React from "react";

const NasaCard = (props) => {


    return(
        <div className="nasa-list">
            <h1>Nasa Picture of the Day</h1>
            <h2>Title: {props.title}</h2>
            <div className="card-bottom">
                <p>Date: {props.date}</p>
                <img src={props.img} alt={''}/>
                <p>Explanation: {props.exp}</p>
                <p>Copyright: {props.copyright}</p>
            </div>
        </div>
    )    

}

export default NasaCard;