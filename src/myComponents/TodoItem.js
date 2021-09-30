import React from "react";
// import { Todos } from "./todos";

export const TodoItem = ({ todo, onDelect, onTan, onFinish }) => {
  // const image = require("../img/" + todo.topic + ".jpg");

  return (
    <div>
      <div className="row  ">
        <div className="col mb-4">
          <h5 className="card-title">{todo.sno}</h5>
          <div
            className="card"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* <img src={require('')} /> */}

            <div className="card-body" style={{ width: "70%" }}>
              <div
                className="TopicTime"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5 className="card-title">{todo.topic}</h5>
                <h6> {new Date().toLocaleString()}</h6>
              </div>
              <div className="dropdown-divider"></div>
              <p className="card-text">{todo.about}</p>
            </div>
            {/* <img
              src={image.default}
              className="card-img-top"
              alt="image"
              style={{ width: "30%", background: "none" }}
            /> */}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button type="button" className="btn btn-primary " onClick={onTan}>
              Tantative
            </button>
            {/* <button type="button" className="btn btn-secondary">Secondary</button> */}
            <button
              type="button"
              className="btn btn-success "
              onClick={onFinish}
            >
              Final
            </button>
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => {
                onDelect(todo);
              }}
            >
              Delect
            </button>
            {/* <button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
