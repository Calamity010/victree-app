import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div class="container">
      <div class="container-flex">
        <nav class="Navbar">
          <ul class="navlist">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>More</li>
            <li>Login</li>
            <li>
              <button class="glow-on-hover" type="button">
                Register
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="navbar-logo">
        <img src="" class="img-class" alt="img-logo"></img>
      </div>
    </div>
  );
}

export default Navbar;
