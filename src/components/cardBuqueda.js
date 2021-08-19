import info from '../images/superhero1.png';
import add from '../images/superhero.png';
import CardFront from "../atomics/cardFront";
import CardBack from "../atomics/cardBack";

const CardBusqueda = ({heroe,i,paquete}) =>{
    const {
        image:{url},
        name,
        id
      } = heroe;
    return(
        <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2 mb-2">
            <div key={id} className="card d-flex justify-content-center">
                <CardFront url={url} name={name}/>
                <CardBack paquete={paquete} heroe={heroe} img={info} img1={add}/>
            </div>
        </div>
    )
}

export default CardBusqueda;