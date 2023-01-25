import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { AddTodo, TodoList } from "./components/main";

const App = () => {
  // Tracks the state of the input
  const [value, setValue] = useState("");

  // Tracks the state of todos
  const [todos, setTodos] = useState([]);

  // Functions addTodo
  const handelOnSubmit = (e) => {
    e.preventDefault();

    if (value == "") {
      alert("Enter a task to add!");
    } else {
      addTodo(value);
    }

    setValue("");
  };

  const addTodo = (todo) => {
    const newTodo = {
      text: value,
      id: todos.length + 1,
    };

    setTodos([...todos, newTodo]);
    console.log(value, todos);
  };
  return (
    <>
      <Header />
      <AddTodo
        value={value}
        setValue={setValue}
        handelOnSubmit={handelOnSubmit}
      />
      <TodoList />
    </>
  );
};

export default App;
