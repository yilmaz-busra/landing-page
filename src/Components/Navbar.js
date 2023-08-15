import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="title">tobby digital</h3>
      <ul className="nav-list">
        <li>
          <Link className="link-style">Anasayfa</Link>
        </li>
        <li>
          <Link className="link-style">İşlerimiz</Link>
        </li>
        <li>
          <Link className="link-style">Ekibimiz</Link>
        </li>
        <li>
          <Link className="link-style">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
