import "../App.css";
import "../css/Comman.css";
import "../css/HoneyMoon.css";

import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/ClipLoader";

// images

import transport from "../img/Family Package/himachal/taxi.gif";
import stay from "../img/Family Package/himachal/sleep.gif";
import meals from "../img/Family Package/himachal/vegan-food.gif";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Packages = () => {
  // const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id);
  let isLoading = false;

  let API = `http://webapi.toucanleisures.com/package_details/${id}`;

  const [mediaList1, setMediaList1] = useState([]);

  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMediaList1(data.data);
      console.log(data.data);
      isLoading = true;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fecthApiData(API);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
  }, []);

  let findDetails1 = mediaList1;
  console.log(findDetails1);
  if (findDetails1.length >= 1) {
    isLoading = true;
  }

  if (isLoading) {
    document.title = findDetails1[0].country;
    return (
      <div className="ThailandTourPackagesPlan">
        {/* {
          <DotLoader
            color={"#FAEBD7"}
            loading={loading}
            // cssOverride={override}
            size={100}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        } */}
        <Navigation />

        <div className="thailand-home">
          <h4 className="head-2">Thailand Tour Packages Plan</h4>
          <h1 className="head-1">
            Discover ancient ruins and relaxing beach resorts and buddhist
            temples
          </h1>
          <HashLink to="#Tour-Packages">
            <button className="head-button">
              View All Packages{" "}
              <span class="material-symbols-outlined">
                keyboard_double_arrow_down
              </span>
            </button>
          </HashLink>
        </div>

        <div className="tour-packages" id="Tour-Packages">
          <div className="container">
            <div className="tour-package-card">
              <div className="price-amount-head rates-deals">
                <h3>{findDetails1[0].heading}6 Days Plan</h3>
                <h2>{findDetails1[0].title}</h2>
                <div className="rate-price">
                  <h4>Super Deal Price</h4>
                  <h6>
                    <strong>Starts From</strong>
                  </h6>
                  <p>
                    {findDetails1[0].offer} /&nbsp;
                    <span>{findDetails1[0].price}/-</span>
                  </p>
                  <h6> Per Person On Twin Sharing </h6>
                </div>
              </div>
              {findDetails1[0].itinerary.map((data, index) => {
                // console.log(JSON.stringify(iten))
                return (
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="container">
                        <div key={index} className="row media-page">
                          <div className="col-lg-4 col-md-8 col-sm-12 media-img">
                            <img src={data.image} className="left-img" />
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-12 media-img">
                            <div className="img1">
                              <div className="comment">
                                <h5>{data.heading}</h5>
                                <ul>
                                  <li>{data.description}</li>
                                </ul>
                                <div className="include-activity">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                      <div>
                                        <h6>INCLUSIONS</h6>
                                        <ul>
                                          <span>
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
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>
                                              {data.stay ? (
                                                <span class="material-symbols-outlined tick">
                                                  check_circle
                                                </span>
                                              ) : (
                                                <span class="material-symbols-outlined">
                                                  dangerous
                                                </span>
                                              )}
                                              Stay
                                            </span>
                                            <br />
                                            <span>
                                              {data.transport ? (
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
                                          </span>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                      <div className="rate-deals">
                                        <button className="view-deals">
                                          <span class="material-symbols-outlined">
                                            calendar_month
                                          </span>
                                          Day -{data.day}
                                        </button>
                                        <span>
                                          {data.transport ? (
                                            <img src={transport} />
                                          ) : (
                                            ""
                                          )}
                                        </span>
                                        <span>
                                          {data.stay ? <img src={stay} /> : ""}
                                        </span>
                                        <span>
                                          {data.meals ? (
                                            <img src={meals} />
                                          ) : (
                                            ""
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
};
export default Packages;
