import React from "react";
import { Link } from "react-router-dom";
// import { SidebarData } from "./Sidebar";
// import { IconContext } from "react-icons";
import SliderMenu from "./SliderMenu";

// import { useStateValue } from "./ContextAPI/StateProvider";

// import { auth } from "./Firebase/firebase";
// import { useHistory } from "react-router-dom";
// import "./navbar.css";
function Navbar() {
  //   const history = useHistory();

  return (
    <>
      {/* ======= Header ======= */}
      {/* <header id="header" className=""> */}

      <nav className=" navbar navbar-expand-lg navbar-light bg-light  header fixed-top d-flex align-items-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Amaakka-Partner
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <SliderMenu />
          </button>
        </div>
      </nav>

      {/* </header> */}
      {/* End Header */}
    </>
  );
}

export default Navbar;
