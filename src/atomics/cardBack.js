import ModalCard from '../components/modalCard';
import PopoverCard from '../components/popoverCard';
import ButtonCard from './buttonCard';
const CardBack = ({heroe,img,img1,paquete}) => {
    const {powerstats:{combat,intelligence,power,speed,strength},id,biography:{alignment},appearance,work} = heroe;
    const {addHeroe,contadorGood,contadorBad} = paquete;
    return (
        <div className="flip-box-back bg-card container text-white text-center">
            <p>{`Combate: ${combat}`}</p>
            <p>{`Inteligencia: ${intelligence}`}</p>
            <p>{`Poder: ${power}`}</p>
            <p>{`Velocidad: ${speed}`}</p>
            <p>{`Fuerza: ${strength}`}</p>
            <div className="row">
                <div className="col-6">
                    <ModalCard heroe={heroe} img={img} color="info"/>
                </div>
                <div className="col-6">
                    {alignment === 'good' && contadorGood < 3 || alignment === 'bad' && contadorBad < 3 ? <ButtonCard img={img1} color="success" onClick={() => addHeroe(id,paquete)}/> : (alignment === 'good') ? <PopoverCard body="Ya agregaste todos tus heroes buenos a tu Team"/> : <PopoverCard body="Ya agregaste todos tus heroes malos a tu Team"/>}
                    {/* <ButtonCard img={img1} color="success" onClick={() => addHeroe(id,paquete)}/> */}
                </div>
            </div>
        </div>
    )
}

export default CardBack
