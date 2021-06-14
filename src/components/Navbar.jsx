import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../utils/firebase";
import { withRouter } from "react-router-dom";
import logo from "../assets/serproemcam.png";

const Navbar = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };

  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Serproemcam logo"
            className="position-relative  img-fluid"
          />
          SERPROEMCAM CIA. LTDA.
        </Link>
        <div>
          <div className="d-flex">
            <NavLink className="btn btn-dark mr-2" to="/" exact>
              Inicio
            </NavLink>
            {props.firebaseUser !== null ? (
              <NavLink className="btn btn-dark mr-2" to="/admin">
                Consignas
              </NavLink>
            ) : null}
            {props.firebaseUser !== null ? (
              <NavLink className="btn btn-dark mr-2" to="/reportes">
                Reportes
              </NavLink>
            ) : null}
            {props.firebaseUser !== null ? (
              <button className="btn btn-dark" onClick={() => cerrarSesion()}>
                Cerrar Sesión
              </button>
            ) : (
              <NavLink className="btn btn-dark mr-2" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
