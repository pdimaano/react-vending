import React from "react";
import { Link } from "react-router-dom";

/**
 *  Presentation component
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> Polvoron
 *
 */

function Polvoron() {
  return (
    <div className="Polvoron">
      <p>You got Polvoron!</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default Polvoron;