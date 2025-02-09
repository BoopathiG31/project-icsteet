import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

function Button() {
  return (
    <>
      <div className="button">
        <button className="btn">
          <Link to="signup">Sign Up</Link>
        </button>
      </div>
    </>
    
  );
}

export default Button;
