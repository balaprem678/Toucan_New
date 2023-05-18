import "../App.css";
import "../css/HoneyMoon.css";
import "../css/Thailand.css";
import "../css/Comman.css";

import p1 from "../img/Thailand/3/p1.webp";
import p2 from "../img/Thailand/3/p2.jpg";
import p6 from "../img/Thailand/3/p6.webp";

import React from "react";

import { useNavigate } from "react-router-dom";

// useNavigate

// images
import Navigation from "./Navigation";
import Footer from "./Footer";

function ThailandTourPackages() {
  let Navigate = useNavigate();
  return (
    <div className="ThailandTourPackages">
      <Navigation />
      <div className="thailand-home">
        <h1>Thailand Vacation Packages</h1>
        <p>
          Discover ancient ruins and relaxing beach resorts and buddhist temples
        </p>
        <a href="">
          <button className="head-button">
            View All Packages{" "}
            <span class="material-symbols-outlined">
              keyboard_double_arrow_down
            </span>
          </button>
        </a>
      </div>
      <div className="Thailand-content margin">
        <div className="container">
          <h1 className="head-content">Thailand Vacation Packages</h1>
          <p className="head-para-content">
            A fun-filled, brimming with culture, history and natural wonders,
            this Land of a Thousand Smiles is ripe with countless travel
            temptations and with the advent of Thailand Tourism, it has emerged
            as a magnet for tourists across the world. This kingdom of amazement
            truly is a wondrous place to endure it all. You will be able to
            discover some of the spectacular tourist places in Thailand that
            will make you go in awe of this vivid South-East Asian jewel.
          </p>
          <p className="head-para-content">
            Mainly Bangkok, Phi Phi Islands, and Phuket are the most included
            destinations in the Thailand tour packages. Apart from these, a lot
            of countryside destinations and little-known places like the UNESCO
            city of Ayutthaya, the gateway to the Golden Triangle Chiang Rai,
            Railay Beach or the secluded island of Koh Kood are coming into the
            limelight as the promising tourist spots.
          </p>
          <p className="head-para-content">
            If you keep your eyes open for the unknown and have the heart to
            explore the undiscovered, then there are a lot of things to do in
            Thailand that you can enjoy during your vacation here. The
            intriguing Thailand shopping, Scuba diving in the Andaman sea,
            Elephant bathing & feeding at several national parks, and visiting
            several Buddhist temples like Wat Phra & Wat Arun are a plateful of
            the attractions that suit everyone’s taste.
          </p>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={p1} alt="" />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 content-section">
                <h5>Spectacular Krabi and Phuket Getaway</h5>
                <ul>
                  <li>
                    Experience the most exciting short vacation in Thailand.
                    Climb rocks, explore mangrove forests in Krabi and
                    rejuvenate on the beautiful beaches of Phuket.
                  </li>
                  <strong>5 Nights : 6 Days</strong>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Flights
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="rate-deal">
                  <h4>Super Deal Price</h4>
                  <h6>
                    <strong>Starts From</strong>
                  </h6>
                  <p>
                    ₹51,498 /<span>46,498</span>
                  </p>
                  <h6> Per Person On Twin Sharing </h6>
                  <button
                    className="view-deal"
                    onClick={() =>
                      Navigate(`/ThailandTourPackagesPlan1/${"thailand-6-day-package"}`)
                    }
                  >
                    More Details
                  </button>
                  <button className="enquery view-deal">
                    <a target="_blank" href="https://wa.link/mvkem1">
                      Enquery Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={p2} alt="" />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 content-section">
                <h5>Love in Bangkok Pattaya</h5>
                <ul>
                  <li>
                    Welcome to Thailand, one of Asia’s most Visited cities, full
                    of culture and history. Upon arrival, driver meets you at
                    the airport and take you to the hotel in Pattaya.
                  </li>
                  <strong>4 Nights : 5 Days</strong>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="rate-deal">
                  <h4>Super Deal Price</h4>
                  <h6>
                    <strong>Starts From</strong>
                  </h6>
                  <p>
                    ₹47,498 /<span>42,498</span>
                  </p>
                  <h6> Per Person On Twin Sharing </h6>

                  <button
                    className="view-deal"
                    onClick={() =>
                      Navigate(`/ThailandTourPackagesPlan1/${"Love"}`)
                    }
                  >
                    More Details
                  </button>
                  <button className="enquery view-deal">
                    <a target="_blank" href="https://wa.link/mvkem1">
                      Enquery Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={p6} alt="" />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 content-section">
                <h5>The Best of Pattaya & Bangkok</h5>
                <ul>
                  <li>
                    Discover the bright city life of Thailand on this short
                    trip. Witness the fun pub-hopping scenes on the magical
                    beaches of Pattaya and immerse yourself in the rich culture
                    of Bangkok.
                  </li>
                  <strong>5 Nights : 6 Days</strong>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="rate-deal">
                  <h4>Super Deal Price</h4>
                  <h6>
                    <strong>Starts From</strong>
                  </h6>
                  <p>
                    ₹15,498 /<span>20,000</span>
                  </p>
                  <h6> Per Person On Twin Sharing </h6>

                  <button
                    className="view-deal"
                    onClick={() =>
                      Navigate(`/ThailandTourPackagesPlan1/${"Bangkok"}`)
                    }
                  >
                    More Details
                  </button>
                  <button className="enquery view-deal">
                    <a target="_blank" href="https://wa.link/mvkem1">
                      Enquery Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThailandTourPackages;
