import React from 'react'
// import { Link } from 'react-router-dom'
import ShortBodyTitle from '../BodyTitle/ShortBodyTitle'

export default function index() {
  return (
    <div className="col-sm-12">
        <ShortBodyTitle title="Business Plan"/>
    <div className="row justify-content-between">

      <div className="col-md-5 col-lg-4">
        <div className="product-price d-flex justify-content-center foo">
           <img src="https://images.pexels.com/photos/327882/pexels-photo-327882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="document visual" className="img-fluid"/>
        </div>
        <div className='my-4 fw-bold border-bottom border-secondary'>
           <h3 className='fw-bold fs-2'> UGX<span className='text-danger'>50000</span></h3>
        </div>
      </div>

      <div className="col-md-7 col-lg-7 section-md-t3">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box-d">
              <h3 className="title-d">Business plan</h3>
            </div>
          </div>
        </div>
        <div className="product-description">
             <p className="description color-text-a no-margin">
             A Resolution is a formal means by which decisions are made by a meeting of 
             company, Resolutions a drafted to legally express the company decision and 
             can be registered with URSB.
          </p>
          <p className="description color-text-a">
            Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Donec velit neque, auctor sit
            amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies
            ligula sed magna dictum porta. Curabitur aliquet quam id dui
            posuere blandit. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar quam id dui posuere blandit.
          </p>
         
        </div>
        <div className="row section-t3">
          <div className="col-sm-12">
            <div className="title-box-d">
              <h3 className="title-d">Amenities</h3>
            </div>
          </div>
        </div>
        <div className="amenities-list color-text-a">
          <ul className="list-a no-margin">
            <li>Fast Turn Around time in 24hrs</li>
            <li>Well defined document</li>
            <li>Fast Turn Around time in 24hrs</li>
            <li>Well defined document</li>
            <li>Fast Turn Around time in 24hrs</li>
            <li>Well defined document</li>
          </ul>
        </div>
        <div className = "d-flex justify-content-center">
        <span
           className="btn btn-danger rounded-3 mx-1 fs-4 d-flex justify-content-center">
                <span className='fw-bold'>Edit</span>
        </span>
        <span
           className="btn btn-outline-danger rounded-3 mx-1 fs-4 d-flex justify-content-center">
                <span className='fw-bold'>Delete</span>
        </span>
        </div>
      </div>
    </div>
  </div>
  )
}
