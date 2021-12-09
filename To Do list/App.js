import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

const App = () => {
  const headerText = "Get Your S*tuff Together List";
  const [todos, setTodos] = useState([

    {
      title: "Make bed",
      isCompleted: false
    },
    {
      title: "Eat healthy breakfast",
      isCompleted: false
    },
    {
      title: "Complete morning reports",
      isCompleted: false
    },
    {
      title: "Review React videos and assignments",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { title: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let currentTodos = [...todos];
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  return (
    <div className="main">
      <h1 className="header">{headerText}</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) => (
        <Todo index={i} key={i} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default App;