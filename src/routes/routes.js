import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import DetailHero from '../pages/DetailHero';
import Home from '../pages/Home';
import Login from '../pages/Login';

  const Routes = () =>{
    // //   const [heroes,validate] = useHeroes();
    // //   console.log(heroes);
    // const [entrada,setEntrada] = useState('');
    // const [heroes,setHeroes] = useState([]);
    // const handler = (e) =>{
    //     const {name,value} = e.target;
    //     setEntrada({
    //         [name] : value.toLowerCase()
    //     })
    // }
    // const {buscarHeroes} = helpers;

    // console.log(entrada)
    // console.log(heroes)
      return(
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Home" component={Home}/>
            <Route path="Home/DetailHero/:id" component={DetailHero}/>
          </Switch>
        </Router>
      )
  }

  export default Routes;