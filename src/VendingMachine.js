import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
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