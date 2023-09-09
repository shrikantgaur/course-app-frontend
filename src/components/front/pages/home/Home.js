// components/Home.js
import React from "react";
import Banner from "../../common/banner/banner";
import "./home.css";
import Card from "../../common/card/Card";

function Home() {
  return (
    <div>
      <div className="home-banner-section">
        <div className="container">
          <Banner />
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
