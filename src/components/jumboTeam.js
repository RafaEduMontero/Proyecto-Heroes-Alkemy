import React, { useContext } from 'react'
//Context
import { HomeContext } from '../context/homeContext';
//Components
import CardAcumulativos from './cardAcumulativos';
import CardTeam from './cardTeam';

const JumboTeam = () => {
    const { team } = useContext(HomeContext);
    return (
        <div className="jumbotron container-fluid">
            <h1 className="display-4 text-center">Éste es tu Team</h1>
            <div className="row">
                {team.map((heroe, i) => {
                    return (
                        <CardTeam heroe={heroe} key={i} />
                    )
                })}
                <CardAcumulativos team={team} />
            </div>
        </div>
    )
}

export default JumboTeam;
