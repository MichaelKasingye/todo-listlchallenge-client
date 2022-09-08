import React from 'react'
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="pagetitle">
    <h1>Task List Challenge</h1>
    <nav>
      <ul className="breadcrumb">
        <li className='mx-2'>
          <Link to="/">Overview</Link>
        </li>
        <li className='mx-2'>
          <Link to="/todo">Todo </Link>
        </li>
        <li className='mx-2'>
          <Link to="/">Tasks-Done <span>2</span> </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}
