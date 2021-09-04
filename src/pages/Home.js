import { Fragment, useEffect } from 'react';
//ReactTouter
import { useHistory } from 'react-router';
//Components
import HomeFooter from '../components/homeFooter';
import HomeBody from '../components/homeBody';
import HomeHeader from '../components/homeHeader';



const Home = () => {

    let history = useHistory();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const verificar = () => {
            if (!token) {
                history.push('/');
            }
        }
        verificar();
    }, [])

    return (
        <Fragment>
            <div className="container-fluid fondoHome">
                    <HomeHeader />
                    <HomeBody />
                    <HomeFooter />
            </div>
        </Fragment>
    )
}

export default Home
