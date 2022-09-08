import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { TodoSelector } from '../../redux/features/Todo/TodoSlice';

export default function Index() {
  const { Todo } = useSelector(TodoSelector);
// const doneTaskLength = Todo?.filter((filterData) => filterData.status === true).length;
// const newTaskLength = Todo?.filter((filterData) => filterData.status === false).length;


  return (
    <div className="pagetitle">
    <h1>Task List Challenge</h1>
    <nav>
      <ul className="breadcrumb">
        <li className='mx-2'>
          <Link to="/">Todo{" "}<span>
            {/* {newTaskLength} */}
            </span></Link>
        </li>
        <li className='mx-2'>
          <Link to="/tasks-done">Tasks-Done <span>
            {/* {doneTaskLength} */}
          </span> </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}
