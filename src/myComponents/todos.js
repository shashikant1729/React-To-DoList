import React from "react";
import { TodoItem } from "./TodoItem"; //todoItem is not in dafault export than we should use {TodoItem}

export const Todos = (props) => {
  //do to this const we have to import by{todos}
  //   let toStyle = {
  //     // width: "44%",
  //       margin: "2%",

  //     // alignItems: "right"
  //   };
  let todoStStyle = {
    // width: "50%",
    // margin: "2%",
    // height: "82vh",
    // overflow: "scroll",
    marginRight: "15px",
   
  };
  
    
  return (
    <div>
      <h3> Todos List </h3> {/* //using for loop */}{" "}
      <div className="pack" style={todoStStyle}>
        {" "}
        {props.todos.length === 0 ? (
          <>
            <h3> No To - Do To Display </h3>{" "}
          </>
        ) : (
          props.todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.sno}
                onDelect={props.onDelect}
                onTan={props.onTan}
                onFinish={props.onFinish}
              />
            );
          })
        )}{" "}
      </div>{" "}
      {/* return(
                      <>                                  
                          <TodoItem todo={todo} key={todo.sno} onDelect = {props.onDelect} onTan = {props.onTan} onFinish = {props.onFinish} />
                      </>
                  )        */}{" "}
      {/* or we can use above return for to add html in return */}{" "}
    </div>
  );
};
