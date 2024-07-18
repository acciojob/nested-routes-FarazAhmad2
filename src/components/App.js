import React from "react";
import "./../styles/App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";
import Grooming from "./products/Grooming";
import Shirt from "./products/Shirt";
import Trouser from "./products/Trouser";
import Jewellery from "./products/Jewellery";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women/*" element={<Women />}>
          <Route path="grooming" element={<Grooming />} />
          <Route path="shirt" element={<Shirt />} />
          <Route path="trouser" element={<Trouser />} />
          <Route path="jewellery" element={<Jewellery />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
