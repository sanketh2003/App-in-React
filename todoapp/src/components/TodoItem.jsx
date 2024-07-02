import React from 'react'
import styles from './todoitem.module.css'
const TodoItem = ({ item, todos ,setTodos}) => {
function Handledelete(item){
  
  console.log("Delete item is ",item)
  setTodos(todos.filter((todo)=> todo !== item))
}

function handleClick(name){
console.log("Item Clicked = ",name)
}

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span >
          <button onClick={()=>Handledelete(item)} className={styles.deleteButton}>x</button>
        </span>
      </div>

      <hr className={styles.line}/></div>
  )
}

export default TodoItem