import React from 'react'
import { useParams } from "react-router-dom";
import EntriesDetailsSection from "../Components/EntriesDetailsSection"


export default function EntriesDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
  <section className="product-single nav-arrow-b " style={{margin:"50px 0 20px 0"}} >
    <div className="container">
      <div className="row">
      <EntriesDetailsSection/>
      </div>
    </div>
  </section>
</>

  )
}
