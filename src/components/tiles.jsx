function Tile(props) {
    return (
        <div>
            <img src={props.tileImage}/>
            <h2>{props.tileTitle}</h2>
            <p>{props.tileText1}</p>
            <p>{props.tileText2}</p>
        </div>
    )
}

export default Tile;
