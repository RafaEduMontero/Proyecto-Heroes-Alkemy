import { createContext, useState } from 'react';

export const HomeContext = createContext();

const HomeProvider = ({children}) => {
    const [entrada,setEntrada] = useState('');
    const [heroes,setHeroes] = useState([]);
    const [validate,setValidate] = useState(false);
    const [noEncontrado,setNoEncontrado] = useState(false);
    const [currentPage,setCurrentPage] = useState(0);
    const [team,setTeam] = useState([]);
    const [teamValidate,setTeamValidate] = useState(false);
    const [contadorGood,setContadorGood] = useState(0);
    const [contadorBad,setContadorBad] = useState(0);

    const estadosGlobales = {
        entrada,setEntrada,
        heroes,setHeroes,
        validate,setValidate,
        noEncontrado,setNoEncontrado,
        currentPage,setCurrentPage,
        team,setTeam,
        teamValidate,setTeamValidate,
        contadorBad,setContadorBad,
        contadorGood,setContadorGood
    }
    return (
        <HomeContext.Provider value={estadosGlobales}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider
