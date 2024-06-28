import React from 'react'
import { useState } from 'react';
import styles from "./form.module.css"
const Form = ({todos,setTodos}) => {
    const [todo, setTodo] = useState("");
    


    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("")
    }
    return (
       
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
            <input className={styles.modernInput} type='text' onChange={(e) => setTodo(e.target.value)} value={todo} placeholder='Enter todo Item ...'/>
            <button className={styles.modernButton} type='Submit'>Add</button>
            </div>
        </form>
          
    )
}

export default Form