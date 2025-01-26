import React from "react";

function TodoCard(props) {
  const { index, todo, deleteTodo, completeTodo } = props;
  return (
    <div className="flex justify-between gap-5 ms-2 bg-gray-900 mt-3 rounded-md p-3 me-2">
      <span>{todo.input}</span>
      <div className="flex gap-x-5">
        {!todo.completed ? (
          <button
            onClick={() => {
              completeTodo(index);
            }}
            className="px-3 py-1 bg-green-800 hover:bg-green-900 rounded-md"
          >
            Done
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            deleteTodo(index);
          }}
          className="px-3 py-1 bg-red-800 hover:bg-red-900 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
