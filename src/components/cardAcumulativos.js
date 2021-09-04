//Reactrap
import { ListGroup, ListGroupItem, Progress } from 'reactstrap';
//Helpers
import helpers from '../helpers/helpers';

const CardAcumulativos = ({team}) => {

    const {acumulativos} = helpers;
    const estadisticas = acumulativos(team);

    const {alturaPromedioTeam,pesoPromedioTeam,powerstatsTeam} = estadisticas;

    return (
        <div className="col-12 mb-2">
            <ListGroup>
                {powerstatsTeam.map((pt,i) =>{
                    const {name,valor,color} = pt;
                    return(
                        <ListGroupItem key={i}>
                            <div className="text-center">{name}</div>
                            <Progress color={color} max={600} value={valor}>{valor}</Progress>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            <ListGroup horizontal>
                <ListGroupItem>{`Peso Promedio Team: ${pesoPromedioTeam.toFixed(2)}Kg`}</ListGroupItem>
                <ListGroupItem>{`Altura Promedio Team: ${alturaPromedioTeam.toFixed(2)}Cm`}</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default CardAcumulativos
