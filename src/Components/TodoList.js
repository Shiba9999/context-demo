import React ,{useContext} from 'react'
import {TodoContext} from '../Context/TodoContext'
import { REMOVE_TODO } from "../Context/action.types";

function TodoList() {
    const {todos, dispatch} = useContext(TodoContext)
    const handleRemove = (id) => {
        dispatch({type: REMOVE_TODO, payload: id})
        //payload meaning what the information you want to carry along with you
    }
  return (
    <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.todoString}
                <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </li>
        ))}
    </ul>
  )
}

export default TodoList