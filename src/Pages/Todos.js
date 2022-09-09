/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddTodo,
  todoIdDelete,
  todoIdStatus,
  useTodoData,
} from "../services/todoQueryService";

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

  const onSuccess = (data) => {
    const TodoDataI = { data: data.data.data };
  };
  const onError = (error) => {
    console.log({ error });
  };
  const { data } = useTodoData(onSuccess, onError, "/");

  const [loadingData, setLoadingData] = useState(false);
  const [datas, setDatas] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      setLoadingData(true);
      AddTodo(datas);
      await notify("Success! Todo Added");
    } catch (error) {
      console.log(error);
    }
    setLoadingData(false);
    setDatas({
      name: "",
    });
  };
  const handleDelete = async (id) => {
    // e.preventDefault();
    try {
      console.log(id);
      await todoIdDelete(id);
      await notify("Success! Todo Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id) => {
    try {
      await todoIdStatus(id, { status: true });
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
            value={datas.name}
            onChange={handleChange}
          />
          {datas.name !== "" ? (
            <input
              type="submit"
              className="new-task-submit"
              value={loadingData ? "Adding..." : "Add"}
            />
          ) : (
            " "
          )}
        </form>
      </header>

      <section className="task-list">
        <h2>Tasks</h2>

        <div id="tasks">
          {data ? (
            <div className="task">
              {data.data
                ?.filter((filterData) => filterData.status === false)
                .map((info) => (
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
                      <button
                        className="check"
                        onClick={() => handleStatus(info._id)}
                      >
                        <i className="bi bi-check"></i>
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(info._id)}
                        // onClick={() => (deleteData(info._id))}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </form>
                ))}
            </div>
          ) : (

            <div >
              <h4>loading...</h4>
              <span className="btn btn-danger placeholder-glow col-6" />
              <span className="placeholder w-75" />
              <span className="placeholder" style={{ width: "25%" }} />
              <span className="btn btn-danger placeholder-glow col-6" />
              <span className="placeholder w-75" />
              <span className="placeholder" style={{ width: "25%" }} />
              <span className="btn btn-danger placeholder-glow col-6" />
              <span className="placeholder w-75" />
              <span className="placeholder" style={{ width: "25%" }} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default FeaturesPage;
