import React from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


import ThailandTourPackages from "./components/ThailandTourPackages";


import ThailandTourPackagesPlan1 from "./components/ThailandTourPackagesPlan1";

export default function Routeslist() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Footer" element={<Footer />} />

          <Route path="/ThailandTourPackages" element={<ThailandTourPackages />} />

          <Route path="/ThailandTourPackagesPlan1/:id" element={<ThailandTourPackagesPlan1 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
