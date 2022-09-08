import React from "react";
// import { Link } from "react-router-dom";


// import Cards from "../Components/Card";

function FeaturesPage() {
 

  return (
    <>
       <header>
        <form className="new-task-form">
          <input
            type="text"
            name="new-task-input"
            className="new-task-input"
            placeholder="What do you have planned?"
          />
          <input type="submit" className="new-task-submit" value="Add" />
        </form>
      </header>

      <section className="task-list">
        <h2>Tasks</h2>

        <div id="tasks">
          <div className="task">
              <form className="form">
            <div className="content">
              <input
                type="text"
                className="text"
                defaultValue="A new task rer"
                readOnly
              />
            </div>
            <div className="actions">
            <button className="check"><i className="bi bi-check"></i></button>
              <button className="edit"><i className="bi bi-pencil-square"></i></button>
              <button className="delete"><i className="bi bi-trash"></i></button>
            </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}

export default FeaturesPage;
