import React from "react";
import "./Course.css";
import banner from "../images/undraw_educator_re_s3jk (1).svg";

function Course() {
  return (
    <>
      <div class="card">
        <div className="crd-text">
          <h2 class="card-title">Learn the best of everything</h2>
          <h6 class="h6-txt">All the skills you need!! </h6>
          <img src={banner} class="img-crd" alt=""></img>
          <p class="para-txt">
            Catered for the best from the best, select from a wide varities of
            courses and gain valuable insights from each field.We provide you
            with the skills that are needed for you to work in an organization
            by providing exposure to real world problems that companies face
            ,become job ready to attend any job interviews with confident.
          </p>
          <p class="para-txt">
            Vicktree is now bringing 60+ new courses that will help you learn
            all the neccessary stuff you need to advance your career and
            progress your growth.
          </p>
          <button type="button" class="check-btn">
            Check out now
          </button>
        </div>
      </div>
    </>
  );
}

export default Course;
