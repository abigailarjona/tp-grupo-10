import React, { useState, } from "react";
import "./footer.css";

import { Modal} from "react-bootstrap";


function Footer() {
  const [showMovie, setShowMovie] = useState(false);

  const handleShowMovie = () => setShowMovie(true);
  const handleCloseMovie = () => setShowMovie(false);


  return (

    <div className="footer">

      <footer>
        <ul>
          <div>
            <li>
              <a href="https://github.com/abigailarjona/tp-grupo-10">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>

            <li>

              <button
                className="integrantes"
                type="button"
                onClick={handleShowMovie}
              >

                <i class="fa-solid fa-users"></i>
                <p>Integrantes del grupo 10 </p>

              </button>
            </li>
          </div>

          <Modal show={showMovie} onHide={handleCloseMovie}>
            <Modal.Header closeButton>
              Grupo 10, Comision 22804, React JS CaC
            </Modal.Header>
            <Modal.Body>
              <h3>Integrantes:</h3>
              <div id="modal-body">

                <div>
                  <p>Niza Laiker</p>
                  <a href="https://www.linkedin.com/in/niza-laiker-bb36a8241/"> Linkedin</a>
                </div>

                <div>
                  <p>Mariano Munarriz</p>
                  <a href="https://www.linkedin.com/">Linkedin Mariano</a>
                </div>

                <div>
                  <p>Naira Leal</p>
                  <a href="https://www.linkedin.com/in/naira-leal-17898b243/">Linkedin</a>
                </div>

                <div>
                  <p>Juan Emiliano Cicirello</p>
                  <a href="www.linkedin.com/in/juan-emiliano-cicirello-4a3629174">Linkedin</a>
                </div>

                <div>
                  <p>Abigail Arjona</p>
                  <a href="https://www.linkedin.com/">Linkedin</a>
                </div>

                <div>
                  <p>Elizabeth Capuzzi</p>
                  <a href="https://www.linkedin.com/in/ecapuzzi/">Linkedin</a>
                </div>

                <div>
                  <p>Jorge Zubieta</p>
                  <a href="https://www.linkedin.com/in/jorge-zubieta-54794013/">Linkedin</a>
                </div>

                <div>
                  <p>Maria de los Angeles Airala</p>
                  <a href="https://www.linkedin.com/in/maria-de-los-angeles-airala-b6ba6b31">Linkedin</a>
                </div>

                <div>
                  <p>Jazmin Sallis</p>
                  <a href="https://www.linkedin.com/in/jazm%C3%ADn-sallis-b62771223/">Linkedin</a>
                </div>
              </div>

            </Modal.Body>

          </Modal>

          <li>
            <a href="/contacto" id="contactanos">
              <i class="fa-regular fa-envelope"></i>
              <p>Contact Us</p>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
};

export default Footer;