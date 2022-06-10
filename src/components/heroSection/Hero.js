import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="container-fluid">
      <div class="hero-section">
        <span class="hero-txt">
          <h1>Getting Started with</h1>
          <h1>the best company.</h1>
          <div class="hero-para">
            <p>
              One stop solution for quality content in <br/>Finance,Agriculture,Career,Business<br/>
              and so much more...
            </p>
          </div>
          <div>
            <button type="button" class="btn-register">
              Start Your Journey
            </button>
          </div>
        </span>
      </div>
      </div>
    </>
  );
}

export default Hero;
