const CardFront = ({url,name}) => {
    return (
        <div className="flip-box-front">
            <img className="card-img  w-100 h-100" src={`${url}`} />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="title inner subTitle">
                    <h5 className="card-title text-white text-center">{name}</h5>
                </div>
            </div>
        </div>
    )
}

export default CardFront
