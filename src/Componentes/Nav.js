import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_blank"}`}>
      <div className="cont-nav">
      <a href="#">
        <img
          className="nav_logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix Logo"
        />
        </a>

        <div className="desplegable">
          <button id="boton-invisible">
            <a href="#">
              <i className="fa-solid fa-user nav__avatar"></i>
            </a>
          </button>
          <div className="links">
            <a href="#">Mis Favoritos</a>
            <hr/>
            <a href="#">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
