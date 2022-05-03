import React, { useState } from "react";
import TodoForm from "./TodoForm";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h2>Whats the plan</h2>
      <TodoForm />
    </>
  );
};
export default TodoList;
