import React, { useState } from 'react'
import TodoItem from './TodoItem';

const Todo = () => {
    const [todo, setTodo] = useState("");

    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button type='Submit'>Add</button>
            </form>
            {todos.map((item) => (<TodoItem key={item} item={item}/>))}
            
        </div>
    )
}

export default Todo