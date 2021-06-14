import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Reportes from "./components/Reportes";

import { auth } from "./utils/firebase";
import Reset from "./components/Reset";
import Inicio from "./components/Inicio";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/reportes">
            <Reportes />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
