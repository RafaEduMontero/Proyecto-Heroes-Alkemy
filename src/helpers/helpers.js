import heroeDB from "../api/heroeDB";
import swal from 'sweetalert2'

let timeOutID;

const helpers = {
    buscarHeroes : async({entrada},setHeroes,setValidate,setNoEncontrado) =>{
        setValidate(false)
        console.log(entrada)
        if (entrada !== '') {
            clearTimeout(timeOutID);
            timeOutID = setTimeout(async () => {
                const heroes = await heroeDB.get(`/${entrada}`);
                if (heroes.data.response === 'success') {
                    setHeroes(heroes.data.results);
                    setValidate(true)
                    setNoEncontrado(false)
                } else {
                    setValidate(true);
                    setNoEncontrado(true);
                }
            }, 500);
        }else{
            setValidate(false);
            setHeroes([])
            setNoEncontrado(false);
        }
    },
    buscarHeroe: async({id},setHeroe) =>{
        const heroe = await heroeDB.get(`/${id}`);
        if(heroe){
            setHeroe(heroe)
        }
    },
    addHeroe: (id, paquete) => {
        const { team, setTeam, heroes,setTeamValidate,contadorBad,setContadorBad,contadorGood,setContadorGood} = paquete;
        const heroe = heroes.filter((heroe) => heroe?.id === id)
        const {biography:{alignment}} = heroe[0];
        if(team.length < 6){
            if(alignment === 'good'){
                if(contadorGood < 3){
                    setContadorGood(contadorGood + 1);
                    setTeam([...team, ...heroe]);
                    console.log(contadorGood)
                }
            }else{
                if(contadorBad < 3){
                    setContadorBad(contadorBad + 1);
                    setTeam([...team, ...heroe]);
                    console.log(contadorBad)
                }
            }
            
            setTeamValidate(true);
        }
    },
    delHeroe: (id, paquete) => {
        const { team, setTeam,contadorBad,setContadorBad,contadorGood,setContadorGood } = paquete;
        const heroe = team.find(heroe => heroe.id === id);
        console.log(heroe);
        const {biography:{alignment}} = heroe;
        if(alignment === 'good'){
            setContadorGood(contadorGood - 1);
        }else{
            setContadorBad(contadorBad - 1);
        }
        const heroes = team.filter(heroe => heroe.id !== id);
        setTeam(heroes);
    },
    mostrarAlert: (nombre,id,paquete,url) =>{
        const {delHeroe} = helpers;
        swal.fire({
            imageUrl: url,
            imageHeight: 100,
            title: 'Eliminar',
            text: `¿Está seguro de eliminar a ${nombre}?`,
            icon: 'warning',
            confirmButtonText: 'Si',
            confirmButtonColor: 'error',
            cancelButtonText: 'No',
            showCancelButton: true
        }).then(respuesta =>{
            if(respuesta.isConfirmed){
                delHeroe(id,paquete);
                swal.fire({
                    text: `¡${nombre} fué Eliminado con Éxito!`,
                    icon: 'success'
                })
            }
        })
    },
    // login: (email,password) =>{
    //     const TokenLogin = 
    // }
}

export default helpers;