import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({
  id,
  title,
  poster_path,
  backdrop_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [showMovie, setShowMovie] = useState(false);

  const handleShowMovie = () => setShowMovie(true);
  const handleCloseMovie = () => setShowMovie(false);

  //2 referenciamos la bd con su coleccion

  const id_user = "102";
  const favoritasCollection = collection(db, "Favoritas");

  //3 declaramos una función para almacenar

  const addFavorite = async (e) => {
    await addDoc(favoritasCollection, {
      id_movie: id,
      id_user: id_user,
      title: title,
    });
  };

  //5 configuración sweetalert
  const confirmFavorite = (id) => {
    Swal.fire({
      title: "You are going to add the movie!",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        addFavorite(id);
        Swal.fire("Added", "The movie was added to favorites.", "Cute");
      }
    });
  };

  return (
    <div className="card text-center bg-dark mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} alt="img" />
        <div className="card-body">
          <div className="d-grid d-md-flex justify-content-md-center">
            <button
              className="badge bg-success text-dark"
              type="button"
              onClick={handleShowMovie}
            >
              More Info
            </button>
          </div>
          <Modal show={showMovie} onHide={handleCloseMovie}>
            <Modal.Header closeButton>
              <Modal.Title>
                <button
                  className="badge bg-warning text-dark"
                  type="button"
                  onClick={() => {
                    confirmFavorite(id);
                  }}
                >
                  Add favorite
                </button>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMG + backdrop_path}
                alt="img"
              />
              <h3>{title}</h3>
              <h4>Vote average: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseMovie}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
