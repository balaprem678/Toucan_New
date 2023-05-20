import "../App.css";

import React from "react";
import logo from "../img/favicon.png";

function Enquiry() {
  return (
    <div className="ThailandTourPackages">
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
                <div className="row">
                  <div className="col-11">
                    <h1 class="modal-title" id="exampleModalToggleLabel">
                      Enquiry Form
                    </h1>
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="modal-body">
                <form action="reservation.php" method="post">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div>
                        <div class="elem-group">
                          <label for="name">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="visitor_name"
                            placeholder="Prem"
                            required
                          />
                          {/* pattern=[A-Z\sa-z]{3,20} */}
                        </div>
                        <div class="elem-group inlined">
                          <label for="adult">Adults</label>
                          <input
                            type="number"
                            id="adult"
                            name="total_adults"
                            placeholder="2"
                            min="1"
                            required
                          />
                        </div>
                        <div class="elem-group inlined">
                          <label for="child">Children</label>
                          <input
                            type="number"
                            id="child"
                            name="total_children"
                            placeholder="2"
                            min="0"
                            required
                          />
                        </div>

                        <div class="elem-group">
                          <label for="phone">Your Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="visitor_phone"
                            placeholder="987-654-3210"
                            required
                            pattern="[1-9]{1}[0-9]{9}"
                            maxlength="10"
                          />
                          {/* pattern=(\d{3})-?\s?(\d{3})-?\s?(\d{4}) */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div>
                        <div class="elem-group">
                          <label for="email">Your E-mail</label>
                          <input
                            type="email"
                            id="email"
                            name="visitor_email"
                            placeholder="prem@gmail.com"
                            required
                          />
                        </div>
                        <div class="elem-group inlined">
                          <label for="checkin-date">Check-in Date</label>
                          <input
                            type="date"
                            id="checkin-date"
                            name="checkin"
                            required
                          />
                        </div>
                        <div class="elem-group inlined">
                          <label for="checkout-date">Check-out Date</label>
                          <input
                            type="date"
                            id="checkout-date"
                            name="checkout"
                            required
                          />
                        </div>
                        <div class="elem-group">
                          <label for="room-selection">
                            Select Room Preference
                          </label>
                          <select
                            id="room-selection"
                            name="room_preference"
                            required
                          >
                            <option value="">
                              Choose a Room from the List
                            </option>
                            <option value="connecting">Connecting</option>
                            <option value="adjoining">Adjoining</option>
                            <option value="adjacent">Adjacent</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="elem-group">
                    <label for="message">Anything Else?</label>
                    <textarea
                      id="message"
                      name="visitor_message"
                      placeholder="Tell us anything else that might be important."
                      required
                    ></textarea>
                  </div>
                  {/* <button type="submit">Book The Rooms</button> */}
                </form>
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
          <div class="modal-dialog modal-dialog-centered modal-footer-dialog-centered">
            <div class="modal-content modal-footer-content">
              <div class="modal-header modal-header-footer">
                <div className="row">
                  <div className="col-11">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                      <img src={logo} alt="" />
                    </h1>
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="modal-body">
                <h1>Thank you!</h1>
                <p>
                  for contacting us, we will reply promptly once your message is
                  received.
                </p>
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
  );
}

export default Enquiry;
