import React from "react";
import { Link } from "react-router-dom";

function Polvoron() {
  return (
    <div className="Polvoron">
      <p>You got Polvoron!</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default Polvoron;