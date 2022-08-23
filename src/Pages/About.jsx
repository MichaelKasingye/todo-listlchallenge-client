import React from 'react'

function About() {
  return (
    <>
    
    {/* Template Main CSS File */}
    {/* =======================================================
    * Solfix
    ======================================================== */}
    {/* ======= Navbar ======= */}
    <nav className="navbar">
      <div className="mobile-menu">
        <span className="open-slide">
          <div className="mx-2 text-danger" href="#" >
            <i className="bi bi-list fs-1 fw-bolder" />
          </div>
        </span>
        <div className="image-container-mobile">
          <a href="index.html" className="logo-mobile">
            {/* <img
              src="assets/img/logo.png"
              alt="solfix logo"
              className="img-fluid"
            /> */}
          </a>
        </div>
      </div>
      <div className="desktop-menu">
        <div className="image-container">
          <a href="index.html" className="logo">
            {/* <img
              src="assets/img/logo.png"
              alt="solfix logo"
              className="img-fluid"
            /> */}
          </a>
        </div>
        <ul className="navbar-nav" style={{ marginRight: 30 }}>
          <li className="nav-lists">
            <a href="/">Home</a>
          </li>
          <li className="nav-lists">
            <a href="/#services">Service</a>
          </li>
          <li className="nav-lists">
            <a href="/about">About</a>
          </li>
          <li className="nav-lists">
            <a href="/contact.html">Contact</a>
          </li>
          <li className="nav-lists">
            <a href="tel:256751297229">
              <i className="bi bi-telephone-fill mx-1 text-danger" />
              call us
            </a>
          </li>
          <li className="buttons-filled ">
            <a href="https://solfixafrica.com/signup">sign up</a>
          </li>
          <li className="buttons-outlined mx-1">
            <a href="https://solfixafrica.com/signin">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="side-menu" className="side-nav">
      <div className="btn-close text-light" >
        ×
      </div>
      <a href="/#">Home</a>
      <a href="/#services">Service</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
      <a href="tel:256751297229">
        <span className="px-1">call us</span>{" "}
        <i className="bi bi-telephone-fill text-danger" />{" "}
      </a>
      <a
        href="https://solfixafrica.com/signup"
        className="btn btn-danger text-light m-1 rounded-0 "
      >
        Sign up
      </a>
      <a
        href="https://solfixafrica.com/signin"
        className="btn btn-outline-danger m-1 rounded-0 text-danger"
      >
        Sign in
      </a>
    </div>
    {/* End Navbar */}
    {/* ======= Body wrapper ======= */}
    <section
      id="body-wrapper"
      className="animate__animated animate__fadeIn"
     
    >
      <div id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="features">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
              <p>About Solfix Africa</p>
            </div>
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 content">
                    {/* <h3 class="text-danger">About Us</h3> */}
                    {/* <span class=" border border-danger"></span> */}
                    <h5 style={{ color: "#3F5974" }}>
                      SOLFIX Limited is a consultancy firm equipped to provide
                      services such as Business Development, Intellectual property
                      and Tax consultancy to Small and Medium Enterprises.
                    </h5>
                    <p className="fst-italic">
                      We are committed to enlightening and educate business owners
                      on the needs of their businesses and in the long run provide
                      solutions to such needs which are accessible anywhere.
                    </p>
                    <h5 style={{ color: "#3F5974" }}>CORE VALUES</h5>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <i className="bx bx-check-double text-danger fs-5 mx-1" />
                        Integrity
                      </li>
                      <li>
                        <i className="bx bx-check-double text-danger fs-5 mx-1" />
                        Transparency
                      </li>
                      <li>
                        <i className="bx bx-check-double text-danger fs-5 mx-1" />
                        Prompt services
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
      </div>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Solfix</h3>
                  <p>
                    Charm Towers level - 2 <br />
                    Plot 12, Kampala Road
                    <br />
                    <br />
                    <strong>Phone:</strong> +256 414 699 575
                    <br />
                    <strong>WhatsApp:</strong> +256 706 045 950
                    <br />
                    <strong>Email:</strong> info@solfixafrica.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    {/* <a href="#" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a> */}
                
                      <i className="bx bxl-instagram" />
            
               
                      <i className="bi bi-youtube" />
             
                    {/* <a href="#" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="/#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/about.html">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/#services">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/pages/intellectualproperty.html">
                      Intellectual Property
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/pages/businesdevelopment.html">
                      Business Development
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/pages/trainings.html">Trainings</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="/pages/tax.html">Tax</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Company</h4>
                <p>
                  SOLFIX is an online platform built to help companies, businesses
                  and individuals handle their everyday problems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Solfix</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </section>
    {/* ======= preloader ======= */}
    <div
      id="preloader"
      className="d-flex  align-items-center justify-content-center flex-wrap"
    >
    
    </div>
    {/* ======= floating icons ======= */}
    <a
      href="/#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up" />
    </a>
    {/* Whatsapp icon */}

    {/* end floating icons */}
    {/* ======= Quick message Modal ======= */}
    {/* Button trigger modal */}
    <div
      className="to-left d-flex align-items-center justify-content-center"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <i className="bi bi-chat-dots" />
    </div>
    {/* Modal */}
    <div
      className="modal fade "
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Quick Message
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form action="">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  name="name"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  name="email"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Question
                </label>
                <textarea
                  className="form-control"
                  id="question.."
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <input type="Submit" className="btn btn-danger rounded-0 m-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* End Modal */}
    {/* Vendor JS Files */}
    {/* JavaScript Bundle with Popper */}
    {/* Template Main JS File */}
    {/*  */}
  </>
  
  )
}

export default About