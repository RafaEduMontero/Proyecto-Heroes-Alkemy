import heroeDB from "../api/heroeDB";
import swal from 'sweetalert2'

let timeOutID;

const helpers = {
    buscarHeroes : async({entrada},setHeroes,setValidate,setNoEncontrado) =>{
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
                    setHeroes([]);
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
        const { team, setTeam, heroes,setTeamValidate} = paquete;
        const heroe = heroes.filter((heroe) => heroe?.id === id)
        setTeam([...team, ...heroe]);
        setTeamValidate(true);
    },
    delHeroe: (id, paquete) => {
        const { team, setTeam } = paquete;
        const heroe = team.filter(heroe => heroe.id !== id);
        setTeam(heroe);
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
    }
}

export default helpers;