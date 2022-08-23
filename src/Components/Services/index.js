import React from "react";

import { Link } from "react-router-dom";

import { ServicesData } from "../../utilities/Services";

function Services() {
  return (
    <section id="services" className="about-boxes">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>
        <div className="row">
          {ServicesData.map((info) => (
            <div
              key={info.id}
              className="col-lg-4 col-md-6 d-flex align-items-stretch align-items-center "
              style={{ height: "280px" }}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="card mt-3 border">
                <div className="card-icon">{info.icon}</div>
                <div className="card-body size">
                  <h3 className="card-title h4">
                    <span href="">{info.title} </span>
                  </h3>
                  <p className="card-text fs-5 p-1">{info.description}</p>
                  <div className="text-end buttons">
                    {/* <a href="/#" class="btn btn-outline-primary btn-sm rounded-0 "data-bs-toggle="modal" data-bs-target="#exampleModal">Ask Us</a> */}
                    <Link
                      to={info.path}
                      className="btn btn-danger btn-sm mx-1 rounded-3"
                    >
                      Get started &#8594;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
