import React from "react";

// import Services from "../Components/Services";
// import Sidebar from "../Components/Sidebar";
import {CardWidgetMini} from "../Components/Widget/Cards";
import BodyTitle from "../Components/BodyTitle";
import { useSelector } from "react-redux";
import { ClientInterestSelector } from "../redux/features/ClientInterest/ClientInterestSlice";


function Home() {
  const { ClientInterest, loading } = useSelector(ClientInterestSelector);

  
  return (
    <>
      <BodyTitle title="Dashboard" />
      <section className="section dashboard">
        <div className="row">
          <CardWidgetMini ClientData={ClientInterest} loading={loading}  />
          {/* <RightSideColumn/> */}
        </div>
      </section>
    </>
  );
}

export default Home;
