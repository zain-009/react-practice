import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  let [todos, setTodos] = useState([
    { input: "Get bike washed", completed: true },
    { input: "Build Pc", completed: false },
    { input: "Learn Full Stack", completed: false },
    { input: "Learn Godot", completed: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function AddTodo(task) {
    const newTodos = [...todos, { input: task, completed: false }];
    setTodos(newTodos);
    handleSave(newTodos);
  }
  function CompleteTodo(index) {
    const newTodos = todos.map((todo, todoIndex) =>
      index == todoIndex ? { ...todo, completed: true } : todo
    );
    setTodos(newTodos);
    handleSave(newTodos);
  }
  function DeleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex != index);
    setTodos(newTodos);
    handleSave(newTodos);
  }

  function handleSave(todos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);
  return (
    <div className="h-screen w-full bg-slate-950 text-white text-xl">
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoInput AddTodo={AddTodo} />
      <TodoList
        todos={todos}
        tab={selectedTab}
        deleteTodo={DeleteTodo}
        completeTodo={CompleteTodo}
      />
    </div>
  );
}

export default App;
