// components/Home.js
import React from "react";
import FullCarousel from "../../common/carousels/FullCarousel";
import "./home.css";
import Card from "../../common/card/Card";

function Home() {
  return (
    <div>
      <div className="home-banner-section">
        <div className="container">
          <FullCarousel />
        </div>
      </div>
      <div className="top-course">
        <div className="container">
          <h2>Top Course</h2>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
