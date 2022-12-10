import React from "react";
import "./Contacto.css";
	

function Contacto() {


    return <form action="https://formsubmit.co/juanemilianocicirello@gmail.com" method="POST">
                <input type="text" name="name" required placeholder="Nombre" className="name" />
                <input name="email" placeholder="Email" className="email" type="email" required />
                <textarea rows="4" cols="50" name="message" placeholder="Please enter your message" className="message" required></textarea>
                
                <input name="submit" className="btn p-2" type="submit"  />
            </form>
} 

export default Contacto;