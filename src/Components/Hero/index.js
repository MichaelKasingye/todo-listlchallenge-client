import React from "react";
// import { Link } from "react-router-dom";

// import Image from 'next/image';
function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>
              All professional services for your business in Uganda right here!
            </h1>
            <h2>
              {" "}
              On-demand services. Less stress, more time and better business.
            </h2>
            <div className="d-flex">
              <a
                href="#featured-services"
                className="btn btn-danger rounded-3 p-3 fw-bold fs-4"
                // data-bs-toggle="modal"
                // data-bs-target="#healthCheck"
              >
                Documents
              </a>
              <a
                href="#services"
                className="btn btn-outline-danger rounded-3 mx-1 fs-4 d-flex align-items-center"
              >
                <span>Our Services</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="assets/img/hero-img.png"
              className="img-fluid animated"
              alt=" people together assembling a lego"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
