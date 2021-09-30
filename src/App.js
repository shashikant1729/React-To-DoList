// import logo from './logo.svg';
import "./App.css";
import Header from "./myComponents/header";
import Footer from "./myComponents/Footer";
import { Todos } from "./myComponents/todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./myComponents/AddTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {About} from './about'

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // let myvar = 56;
  const onDelect = (todo) => {
    console.log("i am delect of todo", todo);

    //delectingg this way in react works
    // let index = todos.indexOf(todo);
    // todos.slice(index, 1);

    //now use setTose to update( use filter )
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const onTan = () => {
    console.log("i am Tantative ");
  };
  const onFinish = () => {
    console.log("i am finish");
  };

  const addTodo = (topic, about) => {
    // console.log("adding todo in list", topic, about);
    const myTodo = {
      topic: topic,
      about: about,
      sno: todos.length !== 0 ? todos[todos.length - 1].sno + 1 : 1,
      // image: image
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(
    //setTodos is the function which update the todos in list
    initTodo
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let addStyle = {
    width: "40%",
    margin: "2%",
  };
  let todoStStyle = {
    width: "60%",
    // margin: "2%",
    height: "90vh",
    overflow: "scroll",
  };
  let todoStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };
  //  console.log(todos[3].image);
  return (
    <>
      <Router>
        <Header title="My todosList" />

        <Switch>
          <Route exact path="/" render={() => {
            return(
            <div style={todoStyle}>
          <div className="add" style={addStyle}>
            <AddTodo addTodo={addTodo}> </AddTodo>
          </div>
          <div className="todoSt" style={todoStStyle}>
            <Todos
              todos={todos}
              onDelect={onDelect}
              onTan={onTan}
              onFinish={onFinish}
            ></Todos>
          </div>
        </div>  
            ) 
          }}>
            
          </Route>
          <Route exact path="/about" >
            <About ></About>
          </Route>
   
        </Switch>

        
        <Footer> </Footer>
      </Router>
    </>
  );
}

export default App;
