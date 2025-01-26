import React from "react";

export function Header(props) {
  const { todos } = props;
  const openTasks = () => {
    var length = 0;
    todos.forEach((todo) => (todo.completed ? length++ : length));
    return length;
  };
  return (
    <header className="p-5 border-b border-b-white font-bold">
      Todo - Open Tasks: ({openTasks()})
    </header>
  );
}
