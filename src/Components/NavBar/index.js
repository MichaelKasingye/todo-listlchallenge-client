/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";
import { useTodoData } from "../../services/todoQueryService";

export default function Index() {
  const onSuccess = (data) => {
    const toDoDataI = { data: data.data.data };
  };
  const onError = (error) => {
    console.log({ error });
  };
  const { data } = useTodoData(onSuccess, onError, "/");
  const length = data;

  const doneTaskLength = length
    ? length.data.filter((filterData) => filterData.status === true).length
    : "0";
  const newTaskLength = length
    ? length.data.filter((filterData) => filterData.status === false).length
    : "0";

  return (
    <div className="pagetitle">
      <h1>Task List Challenge</h1>
      <nav>
        <ul className="breadcrumb">
          <li className="mx-2">
            <Link to="/">
              Todo <span>{newTaskLength}</span>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/tasks-done">
              Tasks-Done <span>{doneTaskLength}</span>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
