import React from "react";
import "./Jumbo.css";


function Jumbo({ children }) {
    return (
      <div
        style={{ height: 50, clear: "both", paddingTop: 120, textAlign: "center" }}
        className="jumbotron"
      >
        {children}
      </div>
    );
  }
  

      export default Jumbo;      