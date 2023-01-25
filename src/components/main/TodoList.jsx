import React from "react";
import "./main.css";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoList = () => {
  return (
    <div className="todo-list">
      <h1>Todo list </h1>
      <ul className="todo-list--items">
        <li className="todo-list--item">
          aljdflsfjlsfjf
          <div>
            <button>
              <FiEdit />
            </button>
            <button>
              <FaTrashAlt />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
