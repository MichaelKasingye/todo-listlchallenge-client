import React from 'react'
import CountUp from 'react-countup';
function Values() {
    return (
        <div className="row justify-content-end">
        <div className="col-lg-11">
          <div className="row justify-content-end">
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <CountUp end={125} />
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <CountUp end={85} />
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-clock" />
                <CountUp end={35} />
                <p>Years of experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-award" />
                <CountUp end={48} />
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    )
}

export default Values
