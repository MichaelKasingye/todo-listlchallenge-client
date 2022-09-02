import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from '../NavBar/SidebarData'

function index() {
  return (
    <>
  <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link className="nav-link " to="/">
        <i className="bi bi-grid" />
        <span>Overview</span>
      </Link>
    </li>
    {/* End Dashboard Overview */}
    
    <li className="nav-heading">Pages</li>
    {SidebarData.map((info, idx) => (
    <li className="nav-item" key={idx}>
      <Link className="nav-link collapsed" to={info.path}>
        {info.icon}
        <span>{info.title}</span>
      </Link>
    </li>
    ))}
  </ul>
</aside>
</>
  )
}

export default index