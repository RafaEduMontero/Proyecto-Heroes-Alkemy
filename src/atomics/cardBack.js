import { useContext } from 'react';
//Components
import ModalCard from '../components/modalCard';
//Context
import { HomeContext } from '../context/homeContext';
//Helpers
import helpers from '../helpers/helpers';
//Atomics
import ButtonCard from './buttonCard';

const CardBack = ({heroe,img,img1,i}) => {
    const {powerstats:{combat,intelligence,power,speed,strength},id,biography:{alignment}} = heroe;
    const {contadorGood,contadorBad,team, setTeam, heroes, setTeamValidate, setContadorBad, setContadorGood} = useContext(HomeContext);
    const {addHeroe} = helpers;
    const paquete ={team, setTeam, heroes, setTeamValidate, contadorBad, setContadorBad, contadorGood, setContadorGood}

    const heroeEnTeam = team.find(h => h.id === heroe.id)
    return (
        <div key={i} className="flip-box-back bg-card container text-white text-center">
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
                    {(alignment === 'good' && contadorGood < 3) || (alignment === 'bad' && contadorBad < 3) ? 
                        <ButtonCard img={img1} disabled={heroeEnTeam} color={`${heroeEnTeam ? 'dark' : 'success'}`} onClick={() => addHeroe(id,paquete)}/> 
                    : <ButtonCard img={img1} disabled="disabled" color="dark"/>}
                </div>
            </div>
        </div>
    )
}

export default CardBack
