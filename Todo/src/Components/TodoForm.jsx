import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
function TodoForm() {
    const[todo,setTodo]=useState()
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return

        addTodo({
            todo,
            completed:false
        })
        setTodo("")
    }
  return (
    <form onSubmit={add}>
    
        <input
        style={{
          border:"1px solid black",
          backgroundColor:"pink",
          color:"black",
          fontSize:"30px",
          padding:"10px",
          margin:"7px",
          borderRadius:"5px",
          width:"500px"
        }}
         type="text"
        placeholder='enter your Todos'
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}} />
        <input
        style={{
          padding:"13px",
          margin:"7px",
          borderRadius:"5px",
          width:"100px",
        
          
        }}
        type="submit" value="add" name="" id="" />
    
    </form>
  )
}

export default TodoForm;