import React from "react";
import "../App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import TopRated from "./TopRated";
import Contacto from "./Contacto";
import { useAuth } from "../context/authContext";

// Función principal, llama a los componentes: Nav, Banner y TopRated
function Principal() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className="App">
      <Nav />
      <Banner />
      <TopRated />
      <Contacto />

    </div>
  );
}

export default Principal;
