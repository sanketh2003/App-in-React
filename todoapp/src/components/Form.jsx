import React from 'react'
import { useState } from 'react';
import styles from "./form.module.css"
const Form = ({todos,setTodos}) => {
    // const [todo, setTodo] = useState("");
    
    const [todo, setTodo] = useState({name:"",done:false});
    

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"",done:false})
    }
    return (
       
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
            <input className={styles.modernInput} type='text' onChange={(e) => setTodo({name:e.target.value,done:false})} value={todo.name} placeholder='Enter todo Item ...'/>
            <button className={styles.modernButton} type='Submit'>Add</button>
            </div>
        </form>
          
    )
}

export default Form