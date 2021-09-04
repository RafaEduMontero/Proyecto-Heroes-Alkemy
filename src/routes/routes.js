import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { HomeContext } from "../context/homeContext";
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => {
  const { team, setTeam } = useContext(HomeContext);

  useEffect(() => {
    let data = localStorage.getItem('team');
    if (data !== null) {
      setTeam(JSON.parse(data));
    } else {
      setTeam([])
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team))
  }, [team])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes;