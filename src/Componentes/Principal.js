import React from "react";
import "../App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import TopRated from "./TopRated";

function Principal() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <TopRated />
    </div>
  );
}

export default Principal;
