import './App.css'
import { useState } from 'react'
function App() {
  //using useState hook to propagate change to UI
const [counter,setCounter]=useState(10);
const [warning,setWarning]=useState("")

//function to increase the counter
const increase=()=>{
  if(counter == 20){ 
    setWarning("Limit Reached")
    return;
  }
  else setWarning("") ;
  setCounter(counter+1);
}

//function to decrease the counter
const decrease=()=>{
  if (counter==0){
     setWarning("Limit Reached");
  return;
}
else setWarning("") ; 
  setCounter(counter-1);
}
//function to reset the counter
const reset=()=>{
  setCounter(10);
  setWarning("") ; 

}

  return (
  <>
  <h1>Counter from 1 to 20</h1>
  <p style={{color:"red"}}>{warning}</p>
  <div>Counter:{counter}</div><br />
  
  <button 
  style={{marginRight:"10px"}}
  onClick={increase}
  >Increase</button>


  <button
   style={{marginRight:"10px"}}
   onClick={decrease}
   >Decrease</button>

  <button
   style={{marginRight:"10px"}}
   onClick={reset}
   >Reset</button>
  </>
  )
}

export default App
