import React from "react";
import { Link } from 'react-router-dom';
import CardImage from "../../images/Banner.jpg";

function Card() {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-image">
          <img src="" />
        </div>
        <div className="card-content">
          <h2>HTML Course</h2>
        </div>
        <div className="card-footer">
          <Link className="card-button">
            <span>Enroll</span>
            <span>Arrow</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
