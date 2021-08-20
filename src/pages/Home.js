import React, { useState,Fragment } from 'react'
import InputField from '../atomics/inputField';
import helpers from '../helpers/helpers';
import CardBusqueda from '../components/cardBuqueda';
import Paginate from '../components/paginate';
import CardTeam from '../components/cardTeam';
import JumboTeam from '../components/jumboTeam';
import ModalCard from '../components/modalCard';

const Home = () => {
    const [entrada,setEntrada] = useState('');
    const [heroes,setHeroes] = useState([]);
    const [validate,setValidate] = useState(false);
    const [noEncontrado,setNoEncontrado] = useState(false);
    const [currentPage,setCurrentPage] = useState(0);
    const [team,setTeam] = useState([]);
    const [teamValidate,setTeamValidate] = useState(false);
    const [contadorGood,setContadorGood] = useState(0);
    const [contadorBad,setContadorBad] = useState(0);

    const handler = (e) =>{
        const {name,value} = e.target;
        setEntrada({
            [name] : value.toLowerCase()
        })
    }

    const {buscarHeroes,addHeroe,delHeroe,mostrarAlert} = helpers;
    const paquete = {addHeroe,team,setTeam,heroes,delHeroe,setTeamValidate,mostrarAlert,contadorGood,setContadorGood,contadorBad,setContadorBad,validate}
    
    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;

    let currentHero = heroes.slice(offset,offset + PER_PAGE).map((heroe,i) =>{
        return(
            <CardBusqueda heroe={heroe} i={i} paquete={paquete} />
        )
    });

    const pageCount = Math.ceil(heroes.length / PER_PAGE);

    const handlePageClick = ({selected}) =>{
        setCurrentPage(selected);
    }

    return (
        <Fragment>
            <div className="container-fluid fondoHome">
                <div className="container">
                    <div className="row d-flex justify-content-center text-center mb-3 text-white">
                        <h1>Tus Héroes al alcance de tu mano</h1>
                        <h4 >Armá tu equipo con los héroes que desees, recuerda que solo puedes armarlo con 3 héroes buenos y 3 malos. ¡A la Carga!</h4>
                        <div className="col-6">
                            <InputField name="entrada" placeholder="Buscar Héroes" onChange={handler} onKeyUp={() => buscarHeroes(entrada, setHeroes, setValidate, setNoEncontrado)} />
                        </div>
                    </div>
                    <div className="row">
                        {team.length !== 0 ? <JumboTeam paquete={paquete} /> : null}
                    </div>
                    {
                        validate ?
                            !noEncontrado ? <Paginate currentHero={currentHero} pageCount={pageCount} handlePageClick={handlePageClick} /> : <h1>Heroe/s No Encontrado/s</h1> : <h3>Aquí aparecerán tus héroes</h3>
                    }
                </div>
                <ModalCard buttonLabel="Modal"/>
            </div>
        </Fragment>
    )
}

export default Home
