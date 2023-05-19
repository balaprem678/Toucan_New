import React, { useState } from "react";
import "../App.css";
import "../css/Comman.css";

import logo from "../img/favicon.png";
import { Link } from "react-router-dom";
// Images
import thailand from "../img/thailand.avif";
import dubai from "../img/dubai.avif";
import Malaysian from "../img/Malaysian.jpg";
import Srilankha from "../img/Srilankha.avif";
import Kashmir from "../img/Kashmir.jpg";

import thailand_1 from "../img/Thailand-1.jpg";
import dubai_1 from "../img/Dubai-1.jpg";
import Malaysian_1 from "../img/malaysia-1.jpg";
import Srilankha_1 from "../img/SINGAPORE-1.jpg";
import Kashmir_1 from "../img/Kashmir-1.jpg";

import International_Honeymoon_Packages from "../img/International Honeymoon Packages.jpg";
import International_Tour_Packages from "../img/International Tour Packages.jpg";
import Family_Packages from "../img/Family Packages.jpg";
import Budget_Packages from "../img/Budget Packages.jpg";
import Luxury_Packages from "../img/Luxury Packages.webp";

export default function Navigation() {
  const [show] = useState(true);
  return (
    <div className="navigation-bar">
      <nav class="navbar navbar-expand-lg black">
        <div class="container">
          <a class="navbar-brand" href="" alt="">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            {show && (
              <ul class="navbar-nav">
                <li class="nav-item nav-item-1 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tour Packages
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to={"/Package"} className="nav-link">
                        <span>
                          <img src={thailand} alt="" />
                        </span>
                        Thailand Tour package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/DubaiTourPackages"} className="nav-link">
                        <span>
                          <img src={dubai} alt="" />
                        </span>
                        Dubai Tour package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/MalaysiaTourPackages"} className="nav-link">
                        <span>
                          <img src={Malaysian} alt="" />
                        </span>
                        Malaysia Tour package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/SingaporeTourPackages"} className="nav-link">
                        <span>
                          <img src={Srilankha} alt="" />
                        </span>
                        Singapore Tour package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/KashmirTourPackages"} className="nav-link">
                        <span>
                          <img src={Kashmir} alt="" />
                        </span>
                        Kashmir Tour package
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-item-2 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Honeymoon Packages
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to={"/ThailandHoneyMoon"} className="nav-link">
                        <span>
                          <img src={thailand_1} alt="" />
                        </span>
                        Thailand Honeymoon package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/DubaiHoneyMoon"} className="nav-link">
                        <span>
                          <img src={dubai_1} alt="" />
                        </span>
                        Dubai Honeymoon package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/MalaysiaHoneyMoon"} className="nav-link">
                        <span>
                          <img src={Malaysian_1} alt="" />
                        </span>
                        Malaysia Honeymoon package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/SingaporeHoneyMoon"} className="nav-link">
                        <span>
                          <img src={Srilankha_1} alt="" />
                        </span>
                        Singapore Honeymoon package
                      </Link>
                    </li>
                    <li>
                      <Link to={"/KashmirHoneyMoon"} className="nav-link">
                        <span>
                          <img src={Kashmir_1} alt="" />
                        </span>
                        Kashmir Honeymoon package
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-item-3 dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Packages by Interest
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        to={"/InternationalTourPackages"}
                        className="nav-link"
                      >
                        <span>
                          <img src={International_Honeymoon_Packages} alt="" />
                        </span>
                        International Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/InternationalHoneyMoonPackages"}
                        className="nav-link"
                      >
                        <span>
                          <img src={International_Tour_Packages} alt="" />
                        </span>
                        International Honeymoon Packages
                      </Link>
                    </li>
                    <li>
                      <Link to={"/FamilyPackage"} className="nav-link">
                        <span>
                          <img src={Family_Packages} alt="" />
                        </span>
                        Family Packages
                      </Link>
                    </li>
                    <li>
                      <Link to={"/BudgetPackages"} className="nav-link">
                        <span>
                          <img src={Budget_Packages} alt="" />
                        </span>
                        Budget Packages
                      </Link>
                    </li>
                    <li>
                      <Link to={"/LuxuryPackages"} className="nav-link">
                        <span>
                          <img src={Luxury_Packages} alt="" />
                        </span>
                        Luxury Packages
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
          <div className="search-bar">
            <div class="containered">
              <form>
                <div class="input-group">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    autocomplete="off"
                  />
                  <label for="search">
                    <i class="fas fa-search"></i>
                  </label>
                </div>
                <div class="suggestion-list hidden"></div>
              </form>
              {/* <div id="apps">
                <div class="app">
                  <i class="fab fa-adobe"></i>
                  <p>Adobe</p>
                </div>

                <div class="app">
                  <i class="fab fa-android"></i>
                  <p>Android</p>
                </div>

                <div class="app">
                  <i class="fab fa-apple"></i>
                  <p>Apple</p>
                </div>

                <div class="app">
                  <i class="fab fa-aws"></i>
                  <p>AWS</p>
                </div>

                <div class="app">
                  <i class="fab fa-behance"></i>
                  <p>Behance</p>
                </div>

                <div class="app">
                  <i class="fab fa-bitcoin"></i>
                  <p>Bitcoin</p>
                </div>

                <div class="app">
                  <i class="fab fa-chrome"></i>
                  <p>Chrome</p>
                </div>

                <div class="app">
                  <i class="fab fa-codepen"></i>
                  <p>Codepen</p>
                </div>

                <div class="app">
                  <i class="fab fa-dribbble"></i>
                  <p>Dribbble</p>
                </div>

                <div class="app">
                  <i class="fab fa-docker"></i>
                  <p>Docker</p>
                </div>

                <div class="app">
                  <i class="fab fa-dropbox"></i>
                  <p>Dropbox</p>
                </div>

                <div class="app">
                  <i class="fab fa-drupal"></i>
                  <p>Drupal</p>
                </div>

                <div class="app">
                  <i class="fab fa-edge"></i>
                  <p>Edge</p>
                </div>

                <div class="app">
                  <i class="fab fa-firefox"></i>
                  <p>Firefox</p>
                </div>

                <div class="app">
                  <i class="fab fa-font-awesome"></i>
                  <p>Font Awesome</p>
                </div>

                <div class="app">
                  <i class="fab fa-github"></i>
                  <p>Github</p>
                </div>

                <div class="app">
                  <i class="fab fa-google"></i>
                  <p>Google</p>
                </div>

                <div class="app">
                  <i class="fab fa-google-drive"></i>
                  <p>Google Drive</p>
                </div>

                <div class="app">
                  <i class="fab fa-google-play"></i>
                  <p>Google Play</p>
                </div>

                <div class="app">
                  <i class="fab fa-google-plus"></i>
                  <p>Google Plus</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
