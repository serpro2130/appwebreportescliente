import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Nosotros = () => {
  const [informacion, setInformacion] = useState([]);

  useEffect(() => {
    // console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "http://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const users = await data.json();
    //console.log(users);
    setInformacion(users.civilizations);
  };

  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {informacion.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros/${item.id}`}>
              {item.name} - {item.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
