const ButtonCard = ({img,color,onClick,label,icon}) => {
    return (
        <button className={`btn btn-${color} btn-sm`} onClick={onClick}>
            {
                label ? `${label}` : <img className="w-50 h-75" src={img}/>
            }
        </button>
    )
}

export default ButtonCard
