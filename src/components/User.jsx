import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //console.log(useParams());
  const { id } = useParams();
  console.log(id);

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    // console.log("useEffect");
    const obtenerDatos = async () => {
      const data = await fetch(
        `http://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
      );
      const users = await data.json();
      //console.log(users);
      setUsuario(users);
    };
    obtenerDatos();
  }, [obtenerDatos]);

  return (
    <div>
      <h3>{usuario.name}</h3>
    </div>
  );
};

export default User;
