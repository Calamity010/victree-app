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
            We are the india's biggest livelihood education app catering to the
            non-privileged class and providing the best of everything so that
            everyone can afford it
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
              <p>
                Training you to be adaptable to every situation and focus on
                what really matters,and work until you become a master.
                <br />
                work hard,endure and never quit.
              </p>
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
                <h3>Mindset</h3>
              </div>
            </div>
            <div className="flip-card-back">
              <p>
                Mindest is crucial to Excellence Believe that you can and you
                are halfway there,the only thing that stands between us and our
                success is our mindset.What we believe is what we become.
              </p>
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
                <h3>Oppurtunities</h3>
              </div>
            </div>
            <div className="flip-card-back">
              <p>
                Reach out and harvest the knowledge of others,surround yourself
                with the right people
              </p>
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
              <p>
                communication,problem-solving,integrity,work-ethic and
                leadership are some of the building blocks for overall
                development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
