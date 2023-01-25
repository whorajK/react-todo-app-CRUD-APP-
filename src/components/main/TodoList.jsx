import React from "react";
import "./main.css";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoList = ({ todos, deleteListItem, markListItem, checked }) => {
  return (
    <div className="todo-list">
      <h1>Todo list </h1>
      <ul className="todo-list--items">
        {/* Maps through the todos and sorts them as list items */}
        {todos
          .sort((a, b) => b.id - a.id)
          .map((todo, index) => {
            return (
              <li
                className="todo-list--item"
                key={todo.id}
                title="Double click to to check"
                onDoubleClick={(e) => markListItem(e)}
              >
                {todo.text}
                <div>
                  <button>
                    <FiEdit />
                  </button>
                  <button onClick={() => deleteListItem(todo)}>
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
