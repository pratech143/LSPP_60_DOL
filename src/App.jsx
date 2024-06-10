import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const[charAllowed,setCharAllowed]=useState(false)
  const[numAllowed,setNumAllowed]=useState(false)
  const[password,setPassword]=useState("pratik")
  const pass=useRef(null)

  const copyPassword= useCallback(()=>{
    pass.current.select()
    window.navigator.clipboard.writeText(password)
    
  },[password])

  const generatePassword=useCallback( ()=>{
    let newpass="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*_+-";
    for (let i = 0; i <length; i++) {
      let random=Math.floor(Math.random()*str.length + 1)
      newpass+=str.charAt(random)
    }
    setPassword(newpass)
    
  },[numAllowed,charAllowed,length])
  useEffect( ()=>generatePassword(),[charAllowed,numAllowed,length,generatePassword])
  
  



  return (
  <>
  <input style={{height:"35px", width:"250px",color:"orange", backgroundColor:"white"}} type="text"  value={password}  readOnly/>
  <button onClick={copyPassword}>copy</button><br />
    <input type="range" 
    value={length}
    min={0}
    max={100}
    onChange={(e)=> setLength(e.target.value)}
    ref={pass}
    /> length:{length} 
    <label >
    <input type="checkbox" value={numAllowed} onChange={(e)=>setNumAllowed(prevNumAllowed=>!prevNumAllowed)} />Numbers</label>
  

    <label >
    <input type="checkbox" value={charAllowed} onChange={(e)=>setCharAllowed(prevCharAllowed=>!prevCharAllowed)} />Characters</label>
    
  </>
  )
}

export default App
