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
import Enquiry from "./components/Enquiry";

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

          <Route path="/Packages/:id" element={<Packages />} />

          <Route path="/Package/:id" element={<Package />} />
          <Route path="/Enquiry" element={<Enquiry />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
