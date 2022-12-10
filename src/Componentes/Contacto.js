import React from "react";
import "./Contacto.css";
	

function Contacto() {


    return <form action="https://formsubmit.co/juanemilianocicirello@gmail.com" method="POST">
                <input type="text" name="name" required placeholder="Nombre" className="name p-2" />
                <input name="email" placeholder="Email" className="email p-2" type="email" required />
                <textarea rows="4" cols="50" name="message" placeholder="Please enter your message" className="message p-2" required></textarea>
                
                <input name="submit" className="btn p-2" type="submit"  />
            </form>
} 

export default Contacto;