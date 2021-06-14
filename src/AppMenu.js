import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Tareas from "./components/Tareas";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/tareas" className="btn btn-dark">
            Tareas
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <NavLink
            to="/contacto"
            className="btn btn-dark"
            activeClassName="active"
          >
            Contacto
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/tareas">
            <Tareas />
          </Route>
          <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
