import { Input } from './Components'
import './App.css'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import{useState} from"react";
function App() {
  
  const[amount,setAmount]=useState(0);
  const[from,setFrom]=useState("usd");
  const[to,setTo]=useState("npr");
  const[convertedAmount,setconvertedAmount]=useState("");
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert=()=>{
    setconvertedAmount(amount*currencyInfo[to])
  }

  return (
    
  <>
  <div style={{display:"flex", justifyContent:"space-around"}}>
  <Input

   label="From"
   amount={amount}
   currencyOptions={options}
   onCurrencyChange={(currency) => setAmount(amount)}
   selectCurrency={from}
   onAmountChange={(amount) => setAmount(amount)}
  />

  <Input
    label="To"
    amount={convertedAmount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setTo(currency)}
    selectCurrency={to}
    amountDisable
    />
  
  
  </div>
  <div style={{marginLeft:"150px" ,marginTop:"10px"}}>
  <button 
  onClick={convert} >Convert</button>
  <button onClick={swap}>Swap</button>
  </div>
  </>
  )
}

export default App
