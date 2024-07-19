
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import Women from "./Women";
import Home from "./Home";

const App = () => {
  return (
    <main>
<div>
  <nav>
  <ul>
        <li><Link to='' >Home</Link></li>
        <li><Link to='/women'>Women</Link></li>
      </ul>
  </nav>
     
      <Routes>
        <Route path="/women/*" element={<Women />} />
        <Route path="/" element={<Home />} />
      </Routes>
        {/* Do not remove the main div */}
    </div>
    </main>
  )
}

export default App
