import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card" >
                <img className="card--image" src={props.imageUrl} alt="location-img" />
                <div className="card--details" >
                    <div className="card--location">
                        <p><img src="./images/Fill-219.svg" className="card--locationImg" />{props.location}</p>
                        <a href={props.googleMapsUrl} className="card--link" target="blank">View on Google Maps</a>
                    </div>
                    <h2 className="card--h2">{props.title}</h2>
                    <p className="card--visitTime">{props.startDate} - {props.endDate}</p>
                    <p className="card--description">{props.description}</p>                
                </div>
            </div>
            <hr/>
        </div>
    )
}