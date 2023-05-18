import "../App.css";
import "../css/Comman.css";
import "../css/HoneyMoon.css";

import React, { useState } from "react";

// images

import taxi from "../img/Family Package/himachal/taxi.gif";
import sleep from "../img/Family Package/himachal/sleep.gif";
import food from "../img/Family Package/himachal/vegan-food.gif";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

//useParams

function ThailandTourPackagesPlan1() {
  const { id } = useParams();
  console.log(id);

  const [mediaIndex, setMediaIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState("");
  const [mediaList, setMediaList] = useState([
    {
      ii: "thailand-6-day-package",
      price: "₹47,498",
      offer: "₹42,498",
      person: " Per Person On Twin Sharing ",
      super: "Super Deal Price",
      start: "Starts From",
      Headings: "Holiday Style Ao Nang Resort Krabi",
      days6: "6 Days Plan",
      itinerary: [
        {
          day: "Days - 1",
          data: "Day 1",
          Heading: "Holiday Style Ao Nang Resort Krabi1",
          description:
            " Day 1 Welcome to Thailand, one of Asia’s most Visited cities, full of culture and history. Upon arrival, driver meets you at the airport and take you to the hotel in Pattaya. This will be a smooth ride in the private van for 2 hours.",
          image:
            "https://tinypic.host/images/2023/05/18/14c352de0aa0397e8.jpeg",

          taxi: true,
          food: true,
          sleep: true,
        },
        {
          day: "Days - 1",
          data: "Day 1",
          Heading: "Holiday Style Ao Nang Resort Krabi1",
          description:
            " Day 1 Welcome to Thailand, one of Asia’s most Visited cities, full of culture and history. Upon arrival, driver meets you at the airport and take you to the hotel in Pattaya. This will be a smooth ride in the private van for 2 hours.",
          image:
            "https://tinypic.host/images/2023/05/18/14c352de0aa0397e8.jpeg",

          taxi: true,
          food: false,
          sleep: true,
        },
        {
          day: "Days - 1",
          data: "Day 1",
          Heading: "Holiday Style Ao Nang Resort Krabi1",
          description:
            " Day 1 Welcome to Thailand, one of Asia’s most Visited cities, full of culture and history. Upon arrival, driver meets you at the airport and take you to the hotel in Pattaya. This will be a smooth ride in the private van for 2 hours.",
          image:
            "https://tinypic.host/images/2023/05/18/14c352de0aa0397e8.jpeg",

          taxi: false,
          food: true,
          sleep: false,
        },
      ],
    },
  ]);

  let findDetails = mediaList.filter((e) => e.ii === id);

  // console.log(findDetails);

  return (
    <div className="ThailandTourPackagesPlan">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Thailand Tour Packages Plan</h4>
        <h1 className="head-1">
          Discover ancient ruins and relaxing beach resorts and buddhist temples
        </h1>
        <a href="">
          <button className="head-button">
            View All Packages{" "}
            <span class="material-symbols-outlined">
              keyboard_double_arrow_down
            </span>
          </button>
        </a>
      </div>

      <div className="tour-packages">
        <div className="container">
          <div className="tour-package-card">
            <div className="price-amount-head rate-deal">
              <h3>{findDetails[0].days6}</h3>
              <h2>{findDetails[0].Headings}</h2>
              <div className="rate-price">
                <h4>{findDetails[0].super}</h4>
                <h6>
                  <strong>{findDetails[0].start}</strong>
                </h6>
                <p>
                  {findDetails[0].price}
                  <span>{findDetails[0].price}/-</span>
                </p>
                <h6>{findDetails[0].offer}</h6>
              </div>
            </div>
            {findDetails[0].itinerary.map((data, index) => {
              // console.log(JSON.stringify(iten))

              return (
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="container">
                      <div key={index} className="row media-page">
                        <div className="col-lg-4 col-md-8 col-sm-12 media-img">
                          <img src={data.image} className="left-img" />
                        </div>
                        <div className="col-lg-5 col-md-8 col-sm-12 media-img">
                          <div className="img1">
                            <div className="comment">
                              <h5>{data.Heading}</h5>
                              <ul>
                                <li>{data.description}</li>
                              </ul>
                              <div className="include-activity">
                                <div>
                                  <h6>INCLUSIONS</h6>
                                  <ul>
                                    <span>
                                      <span>
                                        {data.food ? (
                                          <span class="material-symbols-outlined tick">
                                            check_circle
                                          </span>
                                        ) : (
                                          <span class="material-symbols-outlined">
                                            dangerous
                                          </span>
                                        )}
                                        Foods
                                      </span>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <span>
                                        {data.sleep ? (
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
                                        {data.taxi ? (
                                          <span class="material-symbols-outlined tick">
                                            check_circle
                                          </span>
                                        ) : (
                                          <span class="material-symbols-outlined">
                                            dangerous
                                          </span>
                                        )}
                                        Pickup
                                      </span>
                                    </span>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="rate-deal">
                            <span>{data.taxi ? <img src={taxi} /> : ""}</span>
                            <span>{data.sleep ? <img src={sleep} /> : ""}</span>
                            <span>{data.food ? <img src={food} /> : ""}</span>

                            <button className="view-deal">{data.day}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ThailandTourPackagesPlan1;
