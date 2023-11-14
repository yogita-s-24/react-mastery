import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let counter = 15;

  const addValue = () =>{
    console.log("Clicked",Math.random());
    // counter = counter + 1;
    setCount(count + 1);
  }

  const removevalue = () =>{
    setCount(count-1);
  }


  return (
    <>
     <h1>Counter App</h1>
     <p>Counter Value : {count} </p>
     <button onClick={addValue}>Add Value</button>
     <br/><br/>
     <button onClick={removevalue}>Remove Value</button>
     <p>Footer : {count}</p>
    </>
  )
}

export default App
