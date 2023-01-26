import React from "react";
import "./main.css";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoList = ({
  todos,
  deleteListItem,
  markListItem,
  handleOnEditClick,
}) => {
  return (
    <div className="todo-list">
      <h1>Todo list </h1>
      <ul className="todo-list--items">
        {/* Maps through the todos and sorts them as list items */}
        {todos
          .sort((a, b) => b.id - a.id)
          .map((todo) => {
            return (
              <li
                className="todo-list--item"
                key={todo.id}
                title="Double click to to mark completed"
                onDoubleClick={(e) => markListItem(e)}
              >
                {todo.text}
                <div>
                  <button onClick={() => handleOnEditClick(todo)}>
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
