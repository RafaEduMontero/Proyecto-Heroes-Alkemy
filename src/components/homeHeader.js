import { useContext } from "react";
//Atomics
import InputField from "../atomics/inputField"
//Context
import { HomeContext } from "../context/homeContext";
//Helpers
import helpers from "../helpers/helpers"

const HomeHeader = () => {
    const {entrada,setEntrada, setHeroes, setValidate, setNoEncontrado} = useContext(HomeContext);
    const {buscarHeroes} = helpers;
    const handler = (e) =>{
        const {name,value} = e.target;
        setEntrada({
            [name] : value.toLowerCase()
        })
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center text-center mb-3 text-white container">
                <h1>Tus Personajes al alcance de tu mano</h1>
                <h4 >Armá tu equipo con tus personajes preferidos, recuerda que solo puedes armarlo con 3 Héroes y 3 Villanos. ¡A la Carga!</h4>
                <div className="col-6">
                    <InputField name="entrada" placeholder="Buscar Héroes" onChange={handler} onKeyUp={() => buscarHeroes(entrada, setHeroes, setValidate, setNoEncontrado)} />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
