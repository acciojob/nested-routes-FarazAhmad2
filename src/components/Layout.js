import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
    <div>
      <p>Women Items:</p>
      <nav>
        <ul>
          <li>
            <Link to="grooming">Grooming</Link>
          </li>
          <li>
            <Link to="shirt">Shirt</Link>
          </li>
          <li>
            <Link to="trouser">Trouser</Link>
          </li>
          <li>
            <Link to="jewellery">Jewellery</Link>
          </li>
        </ul>
      </nav>
      <Outlet />  
    </div>
    </main>
  );
};

export default Layout;
