import React, { useState } from "react";
import TodoList from "./Components/Todo-List/Todo-List";
import './App.css';

const App = () => {
  return (
    <div class="todo-app">
      <TodoList/>
    </div>
  );
};

export default App;