import React, { useEffect, useState, } from "react";
import "./footer.css";



function Footer() {
 
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
            <a href="#">
            <i class="fa-solid fa-users"></i>
            </a>
          </li>
          </div>

          <li>
            <a href="#" id="contactanos">
            <i class="fa-regular fa-envelope"></i>
              Contactanos
            </a>
            </li>
        </ul>
      </footer>
    </div>
  )};

  export default Footer;