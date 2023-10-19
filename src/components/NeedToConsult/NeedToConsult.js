import React from "react";
import "./NeedToConsult.css";
import { Link } from "react-router-dom";

const NeedToConsult = () => {
  return (
    <div>
      <h1 className="NeedToConsult-heading">
        Still confused? Need to consult? 
      </h1>
      <Link>
        <button className="NeedToConsult-btn">Click here</button>
      </Link>
    </div>
  );
};

export default NeedToConsult;
