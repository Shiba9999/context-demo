import React, { useReducer } from "react";
import {TodoContext} from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  console.log(todos);
  console.log(dispatch);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="App">
        <h1>Todo App with Reducers</h1>
        {/* <AddTodo /> */}
 
        <TodoForm/>
        <TodoList />
      </div>
    </TodoContext.Provider>


  );
};

export default App;
