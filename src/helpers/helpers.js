//Api
import heroeDB from "../api/heroeDB";
//Swal Alert
import swal from 'sweetalert2'

let timeOutID;

const helpers = {
    buscarHeroes: async ({ entrada }, setHeroes, setValidate, setNoEncontrado) => {
        setValidate(false)
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
        } else {
            setValidate(false);
            setHeroes([])
            setNoEncontrado(false);
        }
    },
    buscarHeroe: async ({ id }, setHeroe) => {
        const heroe = await heroeDB.get(`/${id}`);
        if (heroe) {
            setHeroe(heroe)
        }
    },
    addHeroe: (id, paquete) => {
        const { team, setTeam, heroes, setTeamValidate, contadorBad, setContadorBad, contadorGood, setContadorGood } = paquete;
        const heroe = heroes.filter((heroe) => heroe?.id === id)
        const { biography: { alignment } } = heroe[0];
        if (team.length < 6) {
            if (alignment === 'good') {
                if (contadorGood < 3) {
                    setContadorGood(contadorGood + 1);
                    setTeam([...team, ...heroe]);
                }
            } else {
                if (contadorBad < 3) {
                    setContadorBad(contadorBad + 1);
                    setTeam([...team, ...heroe]);
                }
            }

            setTeamValidate(true);
        }
    },
    delHeroe: (id, paquete) => {
        const { team, setTeam, contadorBad, setContadorBad, contadorGood, setContadorGood } = paquete;
        const heroe = team.find(heroe => heroe.id === id);
        const { biography: { alignment } } = heroe;
        if (alignment === 'good') {
            setContadorGood(contadorGood - 1);
        } else {
            setContadorBad(contadorBad - 1);
        }
        const heroes = team.filter(heroe => heroe.id !== id);
        setTeam(heroes);
    },
    mostrarAlert: (nombre, id, paquete, url) => {
        const { delHeroe } = helpers;
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
        }).then(respuesta => {
            if (respuesta.isConfirmed) {
                delHeroe(id, paquete);
                swal.fire({
                    text: `¡${nombre} fué Eliminado con Éxito!`,
                    icon: 'success'
                })
            }
        })
    },
    acumulativos: (team) => {
        let combate = 0;
        let inteligencia = 0;
        let poder = 0;
        let velocidad = 0;
        let fuerza = 0;
        let powerstatsTeam = [];
        let pesoTotalTeam = 0;
        let alturaTotalTeam = 0;
        let pesoPromedioTeam = 0;
        let alturaPromedioTeam = 0;

        team.forEach(element => {
            const { powerstats: { intelligence, strength, speed, power, combat }, appearance: { height, weight } } = element;
            if (combat === 'null') {
                combate += 0;
            } else {
                combate += parseInt(combat);
            }

            if (intelligence === 'null') {
                inteligencia += 0
            } else {
                inteligencia += parseInt(intelligence);
            }

            if (power === 'null') {
                poder += 0;
            } else {
                poder += parseInt(power);
            }

            if (speed === 'null') {
                velocidad += 0;
            } else {
                velocidad += parseInt(speed);
            }

            if (strength === 'null') {
                fuerza += 0;
            } else {
                fuerza += parseInt(strength);
            }
;
            alturaTotalTeam += parseInt(height[1].replace(/\D/g, ''));
            pesoTotalTeam += parseInt(weight[1].replace(/\D/g, ''));
        });

        alturaPromedioTeam = alturaTotalTeam / team.length;
        pesoPromedioTeam = pesoTotalTeam / team.length;

        powerstatsTeam = [
            {
                name: 'Combate',
                valor: combate,
                color: ''
            },
            {
                name: 'Inteligencia',
                valor: inteligencia,
                color: 'warning'
            },
            {
                name: 'Poder',
                valor: poder,
                color: 'danger'
            },
            {
                name: 'Velocidad',
                valor: velocidad,
                color: 'success'
            },
            {
                name: 'Fuerza',
                valor: fuerza,
                color: 'dark'
            }
        ]

        powerstatsTeam.sort(function (a, b) { return b.valor - a.valor });

        return {
            powerstatsTeam,
            alturaPromedioTeam,
            pesoPromedioTeam
        }
    }
}

export default helpers;