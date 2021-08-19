import React from 'react'
import CardTeam from './cardTeam';

const JumboTeam = ({paquete}) => {
    const {team} = paquete;
    return (
        <div className="jumbotron container-fluid">
            <h1 className="display-4">Éste es tu Team</h1>
            <div className="row">
            {team.map((heroe,i) =>{
                        return(
                            <CardTeam heroe={heroe} i={i} paquete={paquete}/>
                        )})}
            </div>
        </div>
    )
}

export default JumboTeam;
