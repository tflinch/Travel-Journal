
export default function Travel(props) {
    return (
        <div className="travel--card">
            <img src={props.ImgUrl} className="travel--img" />
            <div className="travel--info">
                <div className="travel--stats">
                    <img src="../assets/waypoint-icon.png" className="waypoint-icon"/>
                    <p className="stats--locations">{props.location}</p>
                    <a href={props.GoogleMaps} className="grey">View on google maps</a>
                </div>
                <div className="travel--content">
                    <h1>{props.Title}</h1>
                    <h4>{props.StartDate} - {props.EndDate}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}