import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function  Github() {
  //gets data from loader which is provided getGithubInfo in main
const data=  useLoaderData()
  // const [data,setData]=useState("")
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/pratech143')
  //   .then((res)=>res.json())
  //   .then((data)=>setData(data))
  // })
  return (
    <div>
        <div>Followers:{data ? data.followers :"data not fetched"}</div>
    </div>
  )
}

export default Github;

//fetch data from api
export const  getGithubInfo= async ()=>{
  const response=await  fetch("https://api.github.com/users/pratech143")
  return response.json()

}