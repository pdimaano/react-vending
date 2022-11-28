import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

/**
 *  Renders list of links to different snacks
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> VendingMachine
 */

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <Link to="/chicharron">
        Chicharron
      </Link>
      <Link to="/polvoron">
        Polvoron
      </Link>
      <Link to="/shrimp-chips">
        Shrimp Chips
      </Link>
    </div>
  );
}

export default VendingMachine