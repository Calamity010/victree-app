import React from "react";
import "./Help.css";


function Help() {
  return (
    <body>
      <div className="Help-container">
        <h2 className="hd-text">Dont know Where to start?</h2>
        <p className="hd-text">
          Explore through some of the most popular in demand fields
        </p>
      </div>
      <div className="course-container">
        <div class="ctn-card" id="ctn-card1">
          <h4>Technology</h4>
          <div>
            <button type="button" class="hlp-btn">
              Start now
            </button>
          </div>
        </div>
        <div class="ctn-card" id="ctn-card2">
          <h4>Farming</h4>
          <div>
            <button type="button" class="hlp-btn">
              Start now
            </button>
          </div>
        </div>
        <div class="ctn-card" id="ctn-card3">
          <h4>Science</h4>
          <div>
            <button type="button" class="hlp-btn">
              Start now
            </button>
          </div>
        </div>
        <div class="ctn-card" id="ctn-card4">
          <h4>Business</h4>
          <div>
            <button type="button" class="hlp-btn">
              Start now
            </button>
          </div>
        </div>
        <div class="ctn-card" id="ctn-card5">
          <h4>Trading</h4>
          <div>
            <button type="button" class="hlp-btn">
              Start now
            </button>
          </div>
        </div>
        <div class="ctn-card" id="ctn-card6">
          <h4>Marketing</h4>
          <div>
            <button type="button" class="hlp-btn">
              Start now
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Help;
