import "../App.css";

import React from "react";
import logo from "../img/favicon.png";

import bg_imag from "../img/offer.png";

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
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div className="row">
                  <div className="col-11"></div>
                  <div className="col-1 cross-btn-bg">
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
                <div className="row">
                  <div className="col-lg-6 bg-images">
                    {/* <img src={bg_imag} alt="" /> */}
                    <h5>
                      {/* Thailand Vacation Packages <br /> 5 days / 4 Nights{" "} */}
                      {/* <img src={bg_imag} alt="" /> */}
                    </h5>
                    <div class="geometric-form">
                     
                    </div>
                  </div>
                  <div className="col-lg-6 bg-white">
                    <form
                      action="
                  "
                    >
                      <h4>ENQUIRY FORM</h4>

                      <div class="form-group">
                        <input
                          type="text"
                          id="txtNumeric"
                          class="form-control"
                          name="fname"
                          placeholder="Your Name *"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Your Email*"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          maxlength="10"
                          data-gtm-form-interact-field-id="1"
                          data-parsley-type="number"
                          data-parsley-maxlength="10"
                          data-parsley-minlength="10"
                          name="mobile"
                          placeholder="Mobile No*"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="adult"
                          class="form-control"
                          placeholder="No. of Travelers *"
                          data-parsley-type="number"
                          required=""
                        />
                      </div>
                      {/* <div class="form-group">
                        <input
                          type="text"
                          name="child"
                          class="form-control"
                          placeholder="No. of Children*"
                          data-parsley-type="number"
                          required=""
                        />
                      </div> */}
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="enqdate"
                          name="tdate"
                          placeholder="Trip Date*"
                          autocomplete="off"
                          required=""
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="4"
                          name="msg"
                          placeholder="Your Message.."
                          required=""
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          class="btn btn-primary enquiry-button"
                          value="Send Enquiry"
                          placeholder="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Submit
                </button>
              </div> */}
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
