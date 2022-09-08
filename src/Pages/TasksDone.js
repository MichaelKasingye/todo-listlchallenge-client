import React from "react";
import {
  deleteTodoAsync,
  TodoSelector,
  updateStatusTodoAsync,
} from "../redux/features/Todo/TodoSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTodoData } from "../services/todoQueryService";

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

  // const { Todo } = useSelector(TodoSelector);

  // console.log(Todo);
  const {isloading, data, isError, error,} = useTodoData(onSuccess,onError, '/')
  console.log(data);

  const onSuccess = data => {
    // console.log({ data:data.data.data})
   const registrationDataI = { data:data.data.data}
  }
  const onError = error => {
    console.log({ error })
  }




  const handleDelete = async (id) => {
    await notify("Success! Todo Deleted");
    try {
      await deleteTodoAsync(id);

    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id) => {
    try {
      await notify("Success! Todo Shifted back");
      await updateStatusTodoAsync(id, { status: false });

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

        {/* <div id="tasks">
          {!Todo === "undefined" ? (
            <div className="task">
              {Todo.filter((filterData) => filterData.status === true).map(
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
            "LOADING.."
          )}
        </div> */}
      </section>
    </>
  );
}
