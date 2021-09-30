import React, { useState } from "react";
// import { Date } from './utils';

export const AddTodo = (props) => {
  //   let addStyle = {
  //     // width: "50%",
  //     margin: "2%",
  //     };
  const [topic, setTopic] = useState("");
  const [about, setAbout] = useState("");
  // const [image, setImage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!topic || !about) {
      alert("both must be filled ");
    } else {
      props.addTodo(topic, about);
      setTopic("");
      setAbout("");
    }
  };

  //   let time= {

  //   }

  return (
    <div>
      <div className="App">
        <p> Current Date And Time: {new Date().toLocaleString()} </p>{" "}
      </div>
      <h3> Add To - do </h3>{" "}
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="topic">
            <h4> Topic </h4>{" "}
          </label>{" "}
          <input
            type="text"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            className="form-control"
            id="topic"
          />
        </div>
        <div className="form-group">
          <label htmlFor="about"> About </label>{" "}
          <input
            type="text"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            className="form-control"
            id="about"
          />
        </div>
        {/* <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Upload Image</label>
                  <input
                    type="file"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    className="form-control-file"
                    id="image"
                  />
                </div>
          */}
        <button type="submit" className="btn btn-primary">
          Add{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};
