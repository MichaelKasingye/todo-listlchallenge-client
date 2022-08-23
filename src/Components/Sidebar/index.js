import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
  <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link className="nav-link " to="/">
        <i className="bi bi-grid" />
        <span>Overview</span>
      </Link>
    </li>
    {/* End Dashboard Nav */}
    
    <li className="nav-heading">Pages</li>
    <li className="nav-item">
      <Link className="nav-link collapsed" to="/entries-page">
        <i className="bi bi-person" />
        <span>Entries</span>
      </Link>
    </li>
  </ul>
</aside>

  )
}

export default index