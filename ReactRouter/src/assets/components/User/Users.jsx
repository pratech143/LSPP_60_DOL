import React from 'react'
import { useParams } from 'react-router-dom';

function Users() {
    const {userId}=useParams()
  return (
    
    <div
    style={{
        padding:"10px",
        width:"100vw",
        backgroundColor:"brown",
        color:"white",
        fontSize:"20px",
    }}>User Id: {userId}</div>
  )
}

export default Users;