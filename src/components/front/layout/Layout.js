// components/Layout.js
import React from "react";
import Navigation from "../navigation/Navigation";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="main">
      <div className="page-header bg-light py-2">
        <Navigation />
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
}

export default Layout;
