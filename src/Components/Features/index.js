import React from "react";

// import motto from "./Motto.module.css";
import {Link} from "react-router-dom";

import BodyTitle from "../BodyTitle";
import { FeaturedServices } from "../../utilities/features";

function Services() {

  return (
    <section id="featured-services" className="about-boxes featured-services">
      <div className="container" data-aos="fade-up">
        <BodyTitle title="FEATURES" />
        <div className="row d-flex align-items-center justify-content-center">
          {
          FeaturedServices.map((info) => (
            <div className="col-md-6  d-flex align-items-stretch mb-5 " key={info.id}>
              <Link to={info.path}>
                
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="icon">{info.icon}</div>
                    <h4 className="title">
                        {info.title}
                    </h4>
                    <p className="description">{info.description}</p>
                  </div>
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
