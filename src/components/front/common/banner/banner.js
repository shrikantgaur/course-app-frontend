import React from "react";
import './banner.css';

function Banner() {
  return (
    <div className="banner-section">
      <div className="row">
        <div className="col-6">
          <div className="banner-inner">
            <h2 className="banner-heading">Welcome to CourseApp</h2>
            <p className="banner-description">
              We provide the best course we provide the best course.
            </p>
            <button className="banner-button">Start</button>
          </div>
        </div>
        <div className="col-6">
          <div className="banner-inner">
            <img className="banner-image" src="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
