import "../App.css";
import "../css/HoneyMoon.css";
import "../css/Thailand.css";
import "../css/Comman.css";

import React, { useEffect, useState, useReducer } from "react";

import logo from "../img/favicon.png";

// useNavigate
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Enquiry from "./Enquiry";

const Interest = () => {
  const { id } = useParams();

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  console.log(id);

  let API = `http://webapi.toucanleisures.com/pack/${id}`;

  const [mediaList, setMediaList] = useState([]);

  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMediaList(data.data);
      //console.log(data.data);
    } catch (error) {
      console.log(error);
    }
    forceUpdate();
  };
  useEffect(() => {
    fecthApiData(API);
  }, [reducerValue]);

  let findDetails = mediaList;
  //    console.log(mediaList)
  let Navigate = useNavigate();
  return (
    <div className="ThailandTourPackages">
      <Navigation />
      <div className="thailand-home">
        <h1>Thailand Vacation Packages</h1>
        <p>
          Discover ancient ruins and relaxing beach resorts and buddhist temples
        </p>
        <a href="#Tour-Packages">
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

      {findDetails.map((data, index) => {
        // console.log(JSON.stringify(iten))

        return (
          <div className="tour-packages" id="Tour-Packages">
            <div className="container ">
              <div className="tour-package-card margins">
                <div key={index} className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 content-section">
                    <h5>{data.title}</h5>
                    <ul>
                      <li>{data.description}</li>
                      <strong>
                        {data.nights} Nights / {data.nights + 1} Days
                      </strong>
                    </ul>
                    <div className="include-activity">
                      <div>
                        <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                        <ul>
                          <span>
                            {data.meals ? (
                              <span class="material-symbols-outlined tick">
                                check_circle
                              </span>
                            ) : (
                              <span class="material-symbols-outlined">
                                dangerous
                              </span>
                            )}
                            Meals
                          </span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span>
                            {data.Activities ? (
                              <span class="material-symbols-outlined tick">
                                check_circle
                              </span>
                            ) : (
                              <span class="material-symbols-outlined">
                                dangerous
                              </span>
                            )}
                            Activities
                          </span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span>
                            {data.Activities ? (
                              <span class="material-symbols-outlined tick">
                                check_circle
                              </span>
                            ) : (
                              <span class="material-symbols-outlined">
                                dangerous
                              </span>
                            )}
                            Hotel
                          </span>
                          <br />
                          <span>
                            {data.Transport ? (
                              <span class="material-symbols-outlined tick">
                                check_circle
                              </span>
                            ) : (
                              <span class="material-symbols-outlined">
                                dangerous
                              </span>
                            )}
                            Transport
                          </span>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span>
                            {data.Flights ? (
                              <span class="material-symbols-outlined tick">
                                check_circle
                              </span>
                            ) : (
                              <span class="material-symbols-outlined">
                                dangerous
                              </span>
                            )}
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
                        {data.offer}/<span>{data.price}</span>
                      </p>
                      <h6> Per Person On Twin Sharing </h6>
                      <button
                        className="view-deal"
                        onClick={() => Navigate(`/Interest/${data.id}`)}
                      >
                        {" "}
                        More Details
                      </button>
                      <Enquiry />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Interest;
