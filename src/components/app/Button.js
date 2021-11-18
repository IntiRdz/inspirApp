import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <>
      <Link to="signup">
        <button className="btn">
          <i class="bi bi-search"></i>
          <span>Sign Up</span>
        </button>
      </Link>
    </>
  );
}

export default Button;
