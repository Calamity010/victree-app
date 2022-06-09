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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus mi, condimentum nec erat ac, luctus posuere ipsum. Nulla
            consectetur, massa in vulputate congue, turpis lectus tempor orci,
            vel consequat tortor mauris sed elit. Suspendisse vulputate odio ac
            pulvinar euismod. Nulla vestibulum sem vitae ex porttitor, id luctus
            justo molestie
          </p>
          <p class="para-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus mi, condimentum nec erat ac, luctus posuere ipsum.
          </p>
          <button type="button" class="check-btn">Check out now</button>
        </div>
       
      </div>
    </>
  );
}

export default Course;
