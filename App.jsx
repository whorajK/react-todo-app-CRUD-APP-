import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { AddTodo, TodoList } from "./components/main";
import EditForm from "./components/main/EditTodo";

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

  // Checks whether a todo is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Tracks the todo being edited
  const [currentTodo, setCurrentTodo] = useState({});

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
    e.target.classList.toggle("linethrough");
  };

  // Functions for EditTodo
  const updateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      // takes the current todo and its id and returns the updated current todo
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    updateTodo(currentTodo.id, currentTodo);
  };

  const handleEditInput = (e) => {
    // Appends the current todo with new input value
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleOnEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo }); // sets current todo item to the clicked item
  };

  return (
    <>
      <Header />

      {/* Checks whether editing or not */}
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          handleEditInput={handleEditInput}
          handleEditForm={handleEditForm}
        />
      ) : (
        <AddTodo
          value={value}
          setValue={setValue}
          handelOnSubmit={handelOnSubmit}
        />
      )}

      <TodoList
        todos={todos}
        deleteListItem={deleteListItem}
        markListItem={markListItem}
        handleOnEditClick={handleOnEditClick}
      />
    </>
  );
};

export default App;
