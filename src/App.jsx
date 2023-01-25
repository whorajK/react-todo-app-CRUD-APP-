import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { AddTodo, TodoList } from "./components/main";

const App = () => {
  // Tracks the state of the input
  const [value, setValue] = useState("");

  // Tracks the state of todos
  const [todos, setTodos] = useState(() => {
    const savedItems = localStorage.getItem("todos");

    if (savedItems) {
      // if items are saved parse data from the ls
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  // Tracks whether a todo is completed or not
  const [checked, setChecked] = useState("false");

  // UseEffect to run the component mounts
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Updates the ls when the state of todos changes
  }, [todos]);

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
  };

  // Functions for TodoList
  const deleteListItem = (text) => {
    const filteredItem = todos.filter((todo) => {
      return todo !== text; // returns the filtered items as todo items
    });
    setTodos(filteredItem);
  };

  const markListItem = (e) => {
    setChecked(!checked);
    e.target.classList.toggle("linethrough");
  };

  return (
    <>
      <Header />
      <AddTodo
        value={value}
        setValue={setValue}
        handelOnSubmit={handelOnSubmit}
      />
      <TodoList
        todos={todos}
        checked={checked}
        deleteListItem={deleteListItem}
        markListItem={markListItem}
      />
    </>
  );
};

export default App;
