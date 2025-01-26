import React, { useState } from "react";

function TodoInput(props) {
  const { AddTodo } = props;
  const [task, setTask] = useState("");

  return (
    <div className="flex gap-5 ms-2 my-3">
      <input
        className="bg-gray-600 ps-2 rounded-md"
        name="task"
        id="task"
        placeholder="write your task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          AddTodo(task);
          setTask("");
        }}
        className="px-3 py-1 bg-cyan-900 hover:bg-cyan-950 rounded-md"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
