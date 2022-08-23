import React from 'react'
import { useNavigate } from "react-router-dom"; 



export default function BusinessPlan() {
    const navigate = useNavigate();

function submitHandle(e){
    e.preventDefault();
    console.log("hi");
    navigate("/submit-feedback"); 
}

  return (
    <div
    className="modal fade "
    id="CompanyFormation"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"

  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Business Plan UGX-50000
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form action=""  className="was-validated"  
           onSubmit={submitHandle} >
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                name="name"
                className="form-label"
              >
                Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                name="email"
                className="form-label"
              >
                Email address *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Would you like us to handle this service for you?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  No
                </label>
              </div>
            </div>
            {/* data-bs-dismiss="modal"  */}
            <input type="Submit" className="btn btn-danger rounded-0 m-2" />
            {/* Impletment a conditional rendering if successfully 
            submitted to show the close button to enable user to close the modal */}
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
