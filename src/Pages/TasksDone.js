
/* eslint-disable no-unused-vars */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { todoIdDelete, todoIdStatus, useTodoData } from "../services/todoQueryService";

export default function TasksDone() {

  const notify = (comment) =>
    toast.success(comment, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

 
  const onSuccess = data => {
   const todoDataI = { data:data.data.data}
  }
  const onError = error => {
    console.log({ error })
  }
  const {data} = useTodoData(onSuccess,onError, '/')


  const handleDelete = async (id) => {
    try {
      await todoIdDelete(id)
      await notify("Success! Todo Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id) => {
    try {
      await todoIdStatus(id, {status: false})
      await notify("Success! Todo Shifted back");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <section className="task-list">
        <h2>Tasks Done</h2>

        <div id="tasks">
          {data ? (
            <div className="task">
              {data.data.filter((filterData) => filterData.status === true).map(
                (info) => (
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
                        <span className="fs-6">completed</span>
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(info._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </form>
                )
              )}
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
