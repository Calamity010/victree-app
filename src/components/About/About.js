import React from "react";
import "./About.css";
import logo1 from "../images/undraw_creative_thinking_re_9k71.svg";
import logo2 from "../images/undraw_educator_re_s3jk.svg";
import logo3 from "../images/undraw_multitasking_re_ffpb.svg";
import logo4 from "../images/undraw_sharing_knowledge_03vp.svg";

function About() {
  return (
    <>
      <div className="txt-container">
        <div className="ab-text">
          <h1>why choose us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel sem a purus viverra aliquam non rutrum purus. Nulla vel erat sit
            amet orci ultricies semper
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={logo1}
                class="logo"
                alt="img-logo"
                height="170px"
                width="200px"
              ></img>
              <div class="front-text">
                <h3>Excellence</h3>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>creativity</h1>
              <h6>Theres no limit</h6>
              <h6>to anything</h6>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={logo2}
                class="logo"
                alt="img-logo"
                height="170px"
                width="200px"
              ></img>
              <div class="front-text">
                <h3>Performance</h3>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>creativity</h1>
              <h6>Theres no limit</h6>
              <h6>to anything</h6>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={logo3}
                class="logo"
                alt="img-logo"
                height="170px"
                width="200px"
              ></img>
              <div class="front-text">
                <h3>Skills</h3>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>creativity</h1>
              <h6>Theres no limit</h6>
              <h6>to anything</h6>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={logo4}
                class="logo"
                alt="img-logo"
                height="170px"
                width="200px"
              ></img>
              <div class="front-text">
                <h3>Development</h3>
              </div>
            </div>
            <div className="flip-card-back">
              <h1>creativity</h1>
              <h6>Theres no limit</h6>
              <h6>to anything</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
