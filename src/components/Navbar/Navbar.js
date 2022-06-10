import React from "react";
import "./Navbar.css";
import vicktree from "./vicktree.jpeg";

function Navbar() {
  return (
    // <div class="container">
    //   <div class="container-flex">
    //     <nav class="Navbar">
    //     <div class="navbar-logo">
    //   </div>
    //       <ul class="navlist">
    //         <li>Home</li>
    //         <li>About Us</li>
    //         <li>Courses</li>
    //         <li>More</li>
    //         <li>Login</li>
    //         <li>
    //           <button class="glow-on-hover" type="button">
    //             Register
    //           </button>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    
    // </div>
    <>
   <nav class="navbar navbar-expand-lg navbar-light bg-dark py-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">      <img src={vicktree} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
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
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
