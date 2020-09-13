import React, { useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading.js";
import Form from "./components/Form.js";
import Item from "./components/Item.js";
import { useState } from "react";
import ClearAllTasks from "./components/ClearAllTasks";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  //store todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //when user clicks delete icon, delete todo
  const deleteItem = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todo, index) => index !== id);
    });
  };

  //clear all todos at once
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <>
      <Heading />
      <Form input={input} setInput={setInput} setTodos={setTodos} />
      {todos.map((todo, index) => (
        <Item
          key={index}
          id={index}
          input={todo}
          deleteItem={deleteItem}
          setTodos={setTodos}
        />
      ))}
      {todos.length > 0 && <ClearAllTasks clearTodos={clearTodos} />}
    </>
  );
};
export default App;
