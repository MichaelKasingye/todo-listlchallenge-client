import React from "react";
import {
  deleteTodoAsync,
  fetchTodoAsync,
  postTodoAsync,
  TodoSelector,
  updateStatusTodoAsync,
} from "../redux/features/Todo/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom'
import { useState } from "react";
// import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Cards from "../Components/Card";

function FeaturesPage() {
  // React toastify
  const notify = (comment) =>
    toast.success(comment, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const { Todo } = useSelector(TodoSelector);

  console.log(Todo);
  const dispatch = useDispatch();

  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingData(true);
      await postTodoAsync(data);
      dispatch(fetchTodoAsync());
      await notify("Success! Todo Added");
    } catch (error) {
      console.log(e);
    }
    setLoadingData(false);
    setData({
      name: "",
    });
  };
  const handleDelete = async (id) => {
    try {
      await notify("Success! Todo Deleted");
      await deleteTodoAsync(id);
      await notify("Success! Todo Deleted");


    } catch (error) {
      console.log(error);
    }

  };

  const handleStatus = async (id) => {
    try {
      await notify("Success! Todo Completed");

      await updateStatusTodoAsync(id, {status: true});
      await notify("Success! Todo Completed");

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <header>
        <form className="new-task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="new-task-input"
            placeholder="What do you have planned?"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="new-task-submit"
            value={loadingData ? "Adding..." : "Add"}
          />
        </form>
      </header>

      <section className="task-list">
        <h2>Tasks</h2>

        <div id="tasks">
          {Todo ? (
            <div className="task">
              {Todo.filter(filterData => filterData.status === false).map((info) => (
                <form key={info._id} className="form">
                  <div className="content">
                    <input
                      type="text"
                      className="text"
                      defaultValue={info.name}
                      readOnly
                    />
                  </div>
                  <div className="actions">
                    <button className="check" onClick={() => handleStatus(info._id)}>
                      <i className="bi bi-check"></i>
                    </button>
                    <button className="edit">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(info._id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </form>
              ))}
            </div>
          ) : (
            "LOADING.."
          )}
        </div>
      </section>
    </>
  );
}

export default FeaturesPage;
