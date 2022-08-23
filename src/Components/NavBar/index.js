import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { SidebarData } from "./Sidebar";
// import { IconContext } from "react-icons";
import SliderMenu from "./SliderMenu";

// import { useStateValue } from "./ContextAPI/StateProvider";

// import { auth } from "./Firebase/firebase";
// import { useHistory } from "react-router-dom";
// import "./navbar.css";
function Navbar() {
  const [ setNavbar] = useState(false);
  const [ setBurger] = useState(false);
  //   const [{ user }, dispatch] = useStateValue();
  const user = "null";
  //   const history = useHistory();

  // const showSidebar = () => setSidebar(!sidebar);

  const showBurger = () => {
    if (window.innerWidth <= 765) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  };

  window.addEventListener("resize", showBurger);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  console.log(user);

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
            // data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <SliderMenu/>
          </button>
     
        </div>
      </nav>

      {/* </header> */}
      {/* End Header */}
    </>
  );
}

export default Navbar;
