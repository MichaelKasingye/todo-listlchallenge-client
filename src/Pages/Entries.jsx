import React from "react";
import { Link } from "react-router-dom";
import BodyTitle from "../Components/BodyTitle";
// import Cards from "../Components/Card";

function FeaturesPage() {
  return(
    <>
        <BodyTitle title="Entries" />
       
    <div style={{margin:"150px 0 20px 0"}} >
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Age</th>
      <th scope="col">Start Date</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Brandon Jacob</td>
      <td>Designer</td>
      <td>28</td>
      <td>2016-05-25</td>
      <td> <div className="filter">
              <Link className="icon" to="/" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Options</h6>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fetures-decription-page/:id">
                    View
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
            </td>
    </tr>

   
  </tbody>
</table>

</div>
</>

  )
}


export default FeaturesPage;
