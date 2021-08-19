import ButtonCard from './buttonCard';
const CardBackTeam = ({heroe,img,img1,paquete}) => {
    console.log(heroe)
    const {powerstats:{combat,intelligence,power,speed,strength},id,name,image:{url}} = heroe;
    const {mostrarAlert} = paquete;
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
                    <ButtonCard img={img1} color="danger" onClick={() => mostrarAlert(name,id,paquete,url)}/>
                </div>
            </div>
        </div>
    )
}

export default CardBackTeam;