import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // useState is a react hook which returns an array of two elements first(value) is
  // the variable/state storing any value and setValue is a method to control its value.


  //This is actualy a variable declaration and initialization using hook.
  const [value, setValue] = useState(10)  

  // const increaseValue = () => setValue(v => v + 1)
  const decreaseValue = () => setValue(v => v - 1)

  return (
    <>
      <h1>Counter Value: {value}</h1>
      <button onClick={()=> setValue(value+ 1)}>Increase</button>
      <br /><br />
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App

// setValue method also accept a callback.