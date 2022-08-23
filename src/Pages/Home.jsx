import React from "react";

// import Services from "../Components/Services";
// import Sidebar from "../Components/Sidebar";
import LeftSideColumns from "../Components/LeftSideColumns";
import BodyTitle from "../Components/BodyTitle";

function Home() {
  return (
    <>
        <BodyTitle title="Dashboard" />
        <section className="section dashboard">
          <div className="row">
            <LeftSideColumns />
            {/* <RightSideColumn/> */}
          </div>
        </section>
    </>
  );
}

export default Home;
