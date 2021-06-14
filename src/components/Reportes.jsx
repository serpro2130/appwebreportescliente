import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { db } from "../utils/firebase.js";

const Reportes = () => {
  const [reporte, setReporte] = useState("");
  const [error, setError] = useState("");
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    const getReportes = async () => {
      const { docs } = await db.collection("Reportes").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setReportes(nuevoArray);
    };
    getReportes();
  }, []);

  const setReportesGuardias = async (e) => {
    e.preventDefault();
    if (!reporte.trim()) {
      setError("El campo reporte está vacio");
    }
    const reporteGuardia = {
      reporte: reporte,
    };
    try {
      const data = await db.collection("Reportes").add(reporteGuardia);
      console.log("Reporte añadido");
    } catch (e) {
      console.log(e);
    }
    setReporte("");
  };

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col">
          <h2>Reportes diarios de la guardia</h2>
          <form onSubmit={setReportesGuardias} className="form-group">
            <input
              value={reporte}
              onChange={(e) => {
                setReporte(e.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el reporte"
              type="text"
            />
            <input
              type="submit"
              value="Registrar"
              className="btn btn-dark btn-block mt-3"
            />
          </form>
          {error ? (
            <div>
              <p>{error} </p>
            </div>
          ) : (
            <span></span>
          )}
        </div> */}
        <div className="col">
          <h2>Lista de reportes</h2>
          <ul>
            {reportes.length !== 0 ? (
              reportes.map((item) => (
                <li key={item.id}>
                  {item.puestoTrabajo}-{item.reporte}-{item.fechaReporte}-
                  {item.nombreGuardia}-{item.horaReporte}
                </li>
              ))
            ) : (
              <span>Lo siento no hay reportes registrados</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Reportes);
