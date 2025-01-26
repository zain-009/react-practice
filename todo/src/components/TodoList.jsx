import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, tab, deleteTodo, completeTodo } = props;
  const filteredTodos =
    tab === "All"
      ? todos
      : tab === "Open"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);
  return (
    <>
      <span className="text-lg mx-2">Showing: {tab}</span>
      {filteredTodos.map((todo, index) => {
        return (
          <TodoCard
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </>
  );
}

export default TodoList;
