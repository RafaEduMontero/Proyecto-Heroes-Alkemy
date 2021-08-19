import ButtonCard from './buttonCard';
const CardBack = ({heroe,img,img1,paquete}) => {
    const {powerstats:{combat,intelligence,power,speed,strength},id} = heroe;
    const {addHeroe} = paquete;
    return (
        <div className="flip-box-back bg-card container text-white text-center">
            <p>{`Combate: ${combat}`}</p>
            <p>{`Inteligencia: ${intelligence}`}</p>
            <p>{`Poder: ${power}`}</p>
            <p>{`Velocidad: ${speed}`}</p>
            <p>{`Fuerza: ${strength}`}</p>
            <div className="row">
                <div className="col-6">
                    <ButtonCard img={img} color="info" />
                </div>
                <div className="col-6">
                    <ButtonCard img={img1} color="success" onClick={() => addHeroe(id,paquete)}/>
                </div>
            </div>
        </div>
    )
}

export default CardBack
