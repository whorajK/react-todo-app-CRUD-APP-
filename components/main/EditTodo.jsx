import { FiEdit } from "react-icons/fi";

const EditForm = ({ handleEditInput, currentTodo, handleEditForm }) => {
  const style = {
    fontSize: "1.3rem",
  };

  return (
    <div className="edit-todo">
      <form onSubmit={handleEditForm}>
        <input
          type="text"
          autoFocus
          autoComplete="off"
          name="edit-input"
          id="edit-input"
          value={currentTodo.text}
          onChange={handleEditInput}
        />
        <label htmlFor="edit-input" aria-label="input">
          Edit Todo
        </label>
        <button type="submit">
          <FiEdit style={style} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
