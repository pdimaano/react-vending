import React from "react";
import { Link } from "react-router-dom";

function ShrimpChips() {
  return (
    <div className="ShrimpChips">
      <p>You got shrimp chips!</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default ShrimpChips;