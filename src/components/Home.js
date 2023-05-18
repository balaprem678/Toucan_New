import "../App.css";
import "../css/Comman.css";
import "../css/Responsive.css";

import React from "react";
import Navigation from "./Navigation";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import { HashLink } from "react-router-hash-link";

//  Installed NPM
//  npm i react-owl-carousel/
// npm i react-router-hash-link

//Routest Link

// Image
import ThemePark from "../img/overview place/Theme Park.png";
import museums from "../img/overview place/museums.png";
import cable_car from "../img/overview place/cable car.png";
import Piller from "../img/overview place/Piller.png";
import park_garden from "../img/overview place/park-garden.webp";
import zoo from "../img/overview place/zoo.webp";
import water_park from "../img/overview place/water park.png";
import play_ground from "../img/overview place/play ground.png";
import joystick from "../img/overview place/joystick.png";
import show_musical from "../img/overview place/show-musical.png";

import star from "../img/star.png";

import k50 from "../img/budget/50k.png";
import k75 from "../img/budget/75k.png";
import l1 from "../img/budget/1l.png";
import l2 from "../img/budget/2l.png";
import l3 from "../img/budget/3l.png";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home" id="Home">
      <Navigation />
      <div>
        <div class="frame">
          <div className="home-background">
            <h4>Natural Beauty</h4>
            <h1>
              Discover the most <br /> engaging places
            </h1>
            <a href="">
              <button className="head-button">Explore Destinations</button>
            </a>
            <HashLink to="#countrys-card">
              <div
                class="scroll-prompt"
                scroll-prompt=""
                ng-show="showPrompt"
                style={{ opacity: 1 }}
              >
                <div class="scroll-prompt-arrow-container">
                  <div class="scroll-prompt-arrow">
                    <div></div>
                  </div>
                  <div class="scroll-prompt-arrow">
                    <div></div>
                  </div>
                </div>
              </div>
            </HashLink>
          </div>
        </div>

        <div className="countrys-card margin" id="countrys-card">
          <div className="containered">
            <h1>South East Asia</h1>
            <OwlCarousel
              className="owl-theme"
              responsive={{
                0: {
                  items: "1",
                },
                576: {
                  items: "2",
                },
                768: {
                  items: "2",
                },
                912: {
                  items: "3",
                },
                1000: {
                  items: "3",
                },
                1024: {
                  items: "3",
                },
                1366: {
                  items: "4",
                },
              }}
              autoPlay={true}
              autoplayHoverPause={true}
              nav={true}
              center
              dots={false}
              autoplaySpeed={1000}
              loop
            >
              <div className="item">
                <div>
                  <div class="image-wrap">
                    <div class="card bg-card-1">
                      <div class="content">
                        <h2 class="title">Thailand</h2>
                        <p class="copy">
                          Thailand and its jungles, mountains, islands, and
                          cities bristle with the gilt pinnacles of its
                          innumerable temples.
                        </p>
                        <div className="star">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                        <button class="btn">SEA ALL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div>
                  <div class="image-wrap">
                    <div class="card bg-card-2">
                      <div class="content">
                        <h2 class="title">Kashmir</h2>
                        <p class="copy">
                          The Republic of India controls the state of Jammu and
                          Kashmir. It is made of the Jammu region, the Kashmir
                          Valley, and Ladakh.
                        </p>
                        <div className="star">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                        <button class="btn">SEA ALL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div>
                  <div class="image-wrap">
                    <div class="card bg-card-3">
                      <div class="content">
                        <h2 class="title">Dubai</h2>
                        <p class="copy">
                          Dubai is the most populous city in the United Arab
                          Emirates (UAE) and the capital of the Emirate of
                          Dubai.
                        </p>
                        <div className="star">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                        <button class="btn">SEA ALL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div>
                  <div class="image-wrap">
                    <div class="card bg-card-4">
                      <div class="content">
                        <h2 class="title">Malaysia</h2>
                        <p class="copy">
                          Malaysia is a country in Southeast Asia. The federal
                          constitutional monarchy consists of thirteen states
                          and three federal territories.
                        </p>
                        <div className="star">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                        <button class="btn">SEA ALL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div>
                  <div class="image-wrap">
                    <div class="card bg-card-5">
                      <div class="content">
                        <h2 class="title"> Singapore</h2>
                        <p class="copy">
                          Singapore is a sunny, tropical island in South-east
                          Asia, off the southern tip of the Malay Peninsula.
                        </p>
                        <div className="star">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                        <button class="btn">SEA ALL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>

        <div className="overview-place" id="overview-place">
          <div className="container">
            <div className="row">
              <h1>OverView Place</h1>
              <div className="col-lg-1 col-md-1 col-sm-12"></div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={ThemePark} alt="" />
                    <p>Theme Park</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={museums} alt="" />
                    <p>Museums</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={cable_car} alt="" />
                    <p>Cable Car</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={Piller} alt="" />
                    <p>Historical sites</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={park_garden} alt="" />
                    <p>Park & Garden</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={zoo} alt="" />
                    <p>Zoos & Aquariums</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={water_park} alt="" />
                    <p>Water Park</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={play_ground} alt="" />
                    <p>Play Ground</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={joystick} alt="" />
                    <p>Indoor games</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="overview-card">
                  <div className="carded">
                    <img src={show_musical} alt="" />
                    <p>Shows & Musicals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="budget">
          <div className="container">
            <div className="budget-card">
              <h2>
                HOLIDAYS FOR EVERY <br /> Budget
              </h2>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <div className="card-budget">
                    <img src={k50} alt="" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <img src={k75} alt="" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <img src={l1} alt="" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <img src={l2} alt="" />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <img src={l3} alt="" />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
