//Axios
import axios from 'axios';
//SwalAlert
import Swal from 'sweetalert2';
//Components
import CardBusqueda from '../components/cardBuqueda';

const helperPaginate = {
    paginate: (heroes, currentPage, setCurrentPage) => {
        const PER_PAGE = 12;
        const offset = currentPage * PER_PAGE;

        let currentHero = heroes.slice(offset, offset + PER_PAGE).map((heroe, i) => {
            return (
                <CardBusqueda heroe={heroe} key={i} />
            )
        });

        const pageCount = Math.ceil(heroes.length / PER_PAGE);

        const handlePageClick = ({ selected }) => {
            setCurrentPage(selected);
        }

        return {
            currentHero,
            pageCount,
            handlePageClick
        }
    },
    login: async(history,datos) => {
        try {
            const res = await axios.post('http://challenge-react.alkemy.org/', datos);
            console.log(res)
            const { data: { token } } = res;
            localStorage.setItem('token', token);
            history.push('/Home');
        } catch (e) {
            Swal.fire({
                title: 'Error al iniciar Sesión',
                text: 'Email o Passwrod mal ingresado',
            })
        }
    }
}

export default helperPaginate;