import { useContext } from "react";
//REactrap
import { Spinner } from "reactstrap";
//Atomics
import Jumbotrom from "../atomics/jumbotrom";
//Context
import { HomeContext } from "../context/homeContext";
//Components
import JumboTeam from "./jumboTeam";
import Paginate from "./paginate";

const HomeFooter = () => {
    const{entrada,validate,noEncontrado,team} = useContext(HomeContext);

    return (
        <div className="container">
            <div className="row">
                {team.length !== 0 ? <JumboTeam/> : null}
            </div>
            <div className="mb-4">
                {
                    entrada ?
                        validate ?
                            !noEncontrado ? <Paginate/> : <Jumbotrom title="¡Héroe o Villano no Encontrado!" />
                            : entrada.entrada.length !== 0 ? <div className="text-center"><Spinner color="light" /></div> : <Jumbotrom title="Aquí aparecerán tus búsquedas" />
                        : <Jumbotrom title="Aquí aparecerán tus búsquedas" />
                }
            </div>
        </div>
    )
}

export default HomeFooter
