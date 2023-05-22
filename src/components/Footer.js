import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

// images
import logo from "../img/favicon.png";

function Footer() {
  return (
    <div className="Footer margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <img src={logo} alt="" />
            <p>
              Subscribe Easy To Make More Website Development Press The Bell
              Icon To Get Immediate Notifaction Of Latest Update
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 footer-address-link">
            <h4>Office</h4>
            <p>
              No.36, Medavakkam Main Rd,
              <br /> Madipakkam,
              <br />
              Chennai, Tamil Nadu 600091
            </p>
            <a href="mailto:toucanleisures@gmail.com">
              <i class="fa-solid fa-envelope"></i>&nbsp;
              toucanleisures@gmail.com
            </a>
            <br />
            <a href="tel:94984 77950">
              <i class="fa-solid fa-phone"></i>&nbsp; +91 94984 77950
            </a>
            <br />
            <a href="tel:99627 22292">
              <i class="fa-solid fa-phone"></i>&nbsp; +91 99627 22292
            </a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 footer-home-link">
            <h4>Links</h4>
            <Link to={"/#"} className="nav-link">
              Home
            </Link>
            <Link to={"/#"} className="nav-link">
              Tour Packages
            </Link>
            <Link to={"/#"} className="nav-link">
              Honeymoon Packages
            </Link>
            <Link to={"/#"} className="nav-link">
              Packages By Interst
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h4>Subscribe Now</h4>
            <form
              class="slides-form newsletter margin-top-5 desktop-margin-top-2"
              id="subscribe_newsletter_footer"
            >
              <input
                type="email"
                class="rounded cropLeft phone-wide email_address_field"
                name="user-email"
                placeholder="Enter your email..."
              />
              <button
                type="submit"
                class="button blue pale flat rounded phone-wide"
                name="button"
              >
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </form>
            <div class="hero">
              <div class="social-links">
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy-rights">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 copy-right-1">
              <h6>
                Copyright © 2023
                <a href="https://www.toucanleisures.com/" target="_blank">
                  toucanleisures.com
                </a>
                All Rights Reserved.
              </h6>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 copy-right-2">
              <h6>
                Powered By
                <a href="https://www.eximho.com/" target="_blank">
                  Eximho Private Limited
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
