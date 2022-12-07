import React from "react";
import "../App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import TopRated from "./TopRated";
import Footer from "./Footer";

function Principal() {
  return (
    <div className="App">
      <Nav />     
      <Banner />
      <TopRated />
      <Footer/>      
    </div>
  );
}

export default Principal;
