import React from "react";
import "./Contacto.css";


function Contacto() {


    return <div className="container row justify-content-center m-auto">
        <div className="row">
            <div className="col">
                <h3>Contact US</h3>

            </div>
            <div className="col">
                <form action="https://formsubmit.co/juanemilianocicirello@gmail.com" method="POST">
                    <input type="text" name="name" required placeholder="Nombre" className="name mb-2" />
                    <input name="email" placeholder="Email" className="email mb-2" type="email" required />
                    <textarea rows="4" cols="50" name="message" placeholder="Please enter your message" className="message mb-2" required></textarea>

                    <input name="submit" className="btn p-2" type="submit" />
                </form>
            </div>
        </div>
    </div>



}

export default Contacto;