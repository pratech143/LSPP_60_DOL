//importing the hook
import { useState } from 'react'
import './App.css'

function App() {

  //using the useState hook
  const [counter, setCounter] = useState(10);
  const[warning,setWarning]=useState('');

  //function to increase the counter
  const increase =()=>{
     if(counter==20){
      setWarning("Limit Reached");
      return;
     }
     setCounter(counter+1)
     setWarning("");
  }

  //function to decrease the counter
  const decrease=()=>{
    if(counter==0){
      setWarning("Limit Reached");
      return;
     }
     setCounter(counter-1)
     setWarning("");
  }

  //function to reset the counter
  const reset=()=>{
    setCounter(10);
    setWarning("");
  }
  

  return (
  <>
  <h1>Counter between 1 to 20</h1><br />
  <div>Count:{counter}</div><br />
  <p style={{color:"red"}}>{warning}</p>
  <button onClick={increase} style={{marginRight:"10px"}}>Increase</button>
  <button onClick={decrease} style={{marginRight:"10px"}}>Decrease</button>
  <button onClick={reset} style={{marginRight:"10px"}}>Reset</button>
  </>
  )
}
export default App
