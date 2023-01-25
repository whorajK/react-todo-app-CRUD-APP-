import React from "react";
import "./main.css";
import { AiOutlinePlus } from "react-icons/ai";

const AddTodo = ({ value, setValue, handelOnSubmit }) => {
  const style = {
    fontSize: "1.3rem",
  };

  return (
    <div className="add-todo">
      <form onSubmit={handelOnSubmit}>
        <input
          type="text"
          autoComplete="off"
          id="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="input" aria-label="input" className="active">
          Enter a todo
        </label>
        <button>
          <AiOutlinePlus style={style} />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
