import React, { useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import todoReducer from "../Context/reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { ADD_TODO, REMOVE_TODO } from "../Context/action.types";
import { v4 } from "uuid";

function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  console.log( "useContext",useContext(TodoContext));
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }
    const todo = {
      id: v4(),
      todoString,
    };
    dispatch({ type: ADD_TODO, payload: todo });
    setTodoString("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoString}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setTodoString(e.target.value)}
      />
      <button  type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
