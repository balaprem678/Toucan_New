import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // HashRouter,
} from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import ThailandTourPackages from "./components/ThailandTourPackages";

import Packages from "./components/Packages";
import Package from "./components/Package";

export default function Routeslist() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Footer" element={<Footer />} />

          <Route
            path="/ThailandTourPackages"
            element={<ThailandTourPackages />}
          />
          {/* <Route path="/Package" element={<Package />} /> */}

          <Route path="/Packages/:id" element={<Packages />} />

          <Route path="/Package/:id" element={<Package />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
