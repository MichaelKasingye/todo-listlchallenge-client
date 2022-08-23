import React from 'react'
import { Link } from 'react-router-dom'
import ProductTitle  from '../Components/BodyTitle/ProductTitle';

export default function SubmitFeedBack() {
  return (
    <div className="col-md-12 " style={{margin:"80px 0 20px 40px"}}>
            <div className="row section-t3">
              <div className="col-sm-12">
                <ProductTitle title="Form submited"/>
              </div>
            </div>
            <div className="row container " >
              <div className="col-md-6 col-lg-4">
                <img src="https://images.pexels.com/photos/327882/pexels-photo-327882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-fluid"/>
              </div>
              <div className="col-md-6 col-lg-4">
              <div className="">
                <div className="property-agent">
                  {/* <h4 className="title-agent">Anabella Geller</h4> */}
                  <p className="color-text-a">
                    Thank you for your interest in this product,
                    kindly check your email to receive the 
                    document .
                  </p>
                </div>
              </div>
              <div className="">
                <div className="property-agent">
                <Link to="/" 
                className="btn btn-outline-danger rounded-3 mx-1 fs-4 d-flex align-items-center">
                <span>Back to Home</span>
                </Link>
                </div>
              </div>

              </div>
             
            </div>
            </div>

  )
}
