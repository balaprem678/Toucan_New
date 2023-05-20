import "../App.css";
import "../css/HoneyMoon.css";
import "../css/Thailand.css";
import "../css/Comman.css";

import React, { useEffect, useState } from "react";

import logo from "../img/favicon.png";

// useNavigate
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";

const Package = () => {
  const { id } = useParams();
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
  };
  useEffect(() => {
    fecthApiData(API);
  }, []);

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
                        onClick={() => Navigate(`/Packages/${data.id}`)}
                      >
                        {" "}
                        More Details
                      </button>
                      <div>
                        <div
                          class="modal fade"
                          id="exampleModalToggle"
                          aria-hidden="true"
                          aria-labelledby="exampleModalToggleLabel"
                          tabindex="-1"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalToggleLabel"
                                >
                                  {/* Modal 1 */}
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
                                  <div class="container mx-auto">
                                    <div class="max-w-md mx-auto my-10 bg-white p-2 rounded-md shadow-sm">
                                      <div class="text-center">
                                        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                                          Enquiry Form
                                        </h1>
                                        <p class="text-gray-400 dark:text-gray-400">
                                          Fill up the form below to send us a
                                          message.
                                        </p>
                                      </div>
                                      <div class="m-7">
                                        <form
                                          action="https://api.web3forms.com/submit"
                                          method="POST"
                                          id="form"
                                        >
                                          <input
                                            type="hidden"
                                            name="access_key"
                                            value="YOUR_ACCESS_KEY_HERE"
                                          />
                                          <input
                                            type="hidden"
                                            name="subject"
                                            value="New Submission from Web3Forms"
                                          />
                                          <input
                                            type="checkbox"
                                            name="botcheck"
                                            id=""
                                            style={{ display: "none" }}
                                          />

                                          <div class="mb-6">
                                            <div className="row">
                                              <div className="col-lg-6">
                                                <label
                                                  for="name"
                                                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                  Full Name
                                                </label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  name="name"
                                                  id="name"
                                                  placeholder="John Doe"
                                                  required
                                                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="mb-6">
                                            <div className="row">
                                              <div className="col-lg-6">
                                                <label
                                                  for="email"
                                                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                  Email Address
                                                </label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="email"
                                                  name="email"
                                                  id="email"
                                                  placeholder="you@company.com"
                                                  required
                                                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="mb-6">
                                            <div className="row">
                                              <div className="col-lg-6">
                                                <label
                                                  for="phone"
                                                  class="text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                  Phone Number
                                                </label>
                                              </div>
                                              <div className="col-lg-6">
                                                <input
                                                  type="text"
                                                  name="phone"
                                                  id="phone"
                                                  placeholder="+1 (555) 1234-567"
                                                  required
                                                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="mb-6">
                                            <div className="row">
                                              <div className="col-lg-6">
                                                <label
                                                  for="message"
                                                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                  Your Message
                                                </label>
                                              </div>
                                              <div className="col-lg-6">
                                                <textarea
                                                  rows="5"
                                                  column="6"
                                                  name="message"
                                                  id="message"
                                                  placeholder="Your Message"
                                                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                                  required
                                                ></textarea>
                                              </div>
                                            </div>
                                          </div>
                                          {/* <div class="mb-6">
                                          <button
                                            type="submit"
                                            class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                                          >
                                            Send Message
                                          </button>
                                        </div> */}
                                          <p
                                            class="text-base text-center text-gray-400"
                                            id="result"
                                          ></p>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  class="btn btn-primary"
                                  data-bs-target="#exampleModalToggle2"
                                  data-bs-toggle="modal"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="modal fade"
                          id="exampleModalToggle2"
                          aria-hidden="true"
                          aria-labelledby="exampleModalToggleLabel2"
                          tabindex="-1"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalToggleLabel2"
                                >
                                  <img src={logo} alt="" />
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <h1>Thank you!</h1>
                                <p>
                                  for contacting us, we will reply promptly once
                                  your message is received.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        class="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Enquiry Now
                      </button>
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

export default Package;
