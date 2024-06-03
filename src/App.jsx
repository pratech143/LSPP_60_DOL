import './App.css'

//importing the components
import Student from './Student'
function App() {

  return (
    <>
    <Student  name="Pratik" age={20} isStudent={true}/>
    <Student  />
    <Student name="Ram" age={25}/>
    <Student name="Shyam" isStudent={true}/>
    </>
  )
}

export default App
