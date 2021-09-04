//Images
import info from '../images/superhero1.png';
import del from '../images/delete.png';
//Atomics
import CardFront from "../atomics/cardFront";
import CardBackTeam from '../atomics/cardBackTeam';

const CardTeam = ({heroe,i,paquete}) =>{
    const {
        image:{url},
        name,
      } = heroe;
    return(
        <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2 mb-2">
            <div className="card d-flex justify-content-center">
                <CardFront url={url} name={name}/>
                <CardBackTeam paquete={paquete} heroe={heroe} img={info} img1={del}/>
            </div>
        </div>
    )
}

export default CardTeam;
