//Images
import info from '../images/superhero1.png';
import add from '../images/superhero.png';
//Atomics
import CardFront from "../atomics/cardFront";
import CardBack from "../atomics/cardBack";

const CardBusqueda = ({heroe,i}) =>{
    const {
        image:{url},
        name,
      } = heroe;
    return(
        <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2 mb-2">
            <div key={i} className="card d-flex justify-content-center">
                <CardFront i={i} url={url} name={name}/>
                <CardBack i={i} heroe={heroe} img={info} img1={add}/>
            </div>
        </div>
    )
}

export default CardBusqueda;