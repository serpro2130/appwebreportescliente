import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { withRouter } from "react-router-dom";
import Firestore from "./Firestore";

const Admin = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      console.log("exite un usuario");
      setUser(auth.currentUser);
    } else {
      console.log("no existe el usuario");
      props.history.push("/login");
    }
  }, [props.history]);

  return (
    <div>
      <h2>Actividades de seguridad</h2>
      {user && <Firestore user={user} />}
    </div>
  );
};

export default withRouter(Admin);
