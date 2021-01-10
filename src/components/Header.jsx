import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MOVIES</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
