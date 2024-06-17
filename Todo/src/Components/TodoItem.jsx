import React, { useState,useEffect } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
  
  const[decoration,setDecoration]=useState()
    const[todoEditable,setTodoEditable]=useState(false)
    const[todoMsg,setTodoMsg]=useState(todo.todo)
    const{updateTodo,deleteTodo,toggleComplete}=useTodo()

    const editTodo= ()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setTodoEditable(false)
    }

    const Completed= () =>{
        toggleComplete(todo.id)
    }

    
  return (
    <div
    style={{    border:"none",
      backgroundColor:"#90EE90",
      color:"black",
      padding:"10px",
      margin:"7px",
      borderRadius:"10px"}}

    
    >
        <input type="checkbox" 
        checked={todo.completed}
        onChange={Completed}
          
        />
        <input
        style={{
          border:"1px solid black",
          backgroundColor:"#90EE90",
          color:"black",
          fontSize:"30px",
          padding:"10px",
          margin:"7px",
          borderRadius:"5px"
        
        }}
        type="text"
        value={todoMsg}
        onChange={(e)=>setTodoMsg(e.target.value)} 
        readOnly={!todoEditable} />

        <button
        style={{
          margin:"5px",
          padding:"10px"
        }}
        onClick={()=>{ 
          if(todo.completed) 
            return;
          if(todoEditable){
            editTodo();
          }
          else setTodoEditable((prev)=>!prev)
        }}>{todoEditable ? "Update": "Edit" }</button>
        <button
        onClick={()=> deleteTodo(todo.id)}>Delete</button>


    </div>
  )
}

export default TodoItem;