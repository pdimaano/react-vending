import React from "react";
import { Link } from "react-router-dom";

/**
 *  Presentation component
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> Chicharron
 *
 */

function Chicharron() {
  return (
    <div className="Chicharron">
      <p>You got Chicharron!</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default Chicharron;