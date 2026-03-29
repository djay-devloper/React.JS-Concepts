import { useState } from 'react'
import './App.css'

function App() {

  // color is a state which is visible on UI and can be modified.
  const [color, setColor]= useState("olive")

  return(

    <div className= "w-full h-screen duration-200" style= {{backgroundColor: color}}>

      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">   

        <div className= "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={()=> setColor("red")} className= "outline-none px-4 py-1 rounded-full" style={{backgroundColor: "red"}}>Red</button>

          <button onClick={()=> setColor("green")} className= "outline-none px-4 py-1 rounded-full" style={{backgroundColor: "green"}}>Green</button>

          <button onClick={()=> setColor("blue")} className= "outline-none px-4 py-1 rounded-full" style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={()=> setColor("pink")} className= "outline-none px-4 py-1 rounded-full" style={{backgroundColor: "pink"}}>Pink</button>

          <button onClick={()=> setColor("#C47768")} className= "outline-none px-4 py-1 rounded-full" style={{backgroundColor: "#C47768"}}>HEX</button>

        </div>

      </div>
    </div>

  )
}

export default App

// oncClick method demands the reference of function, which runs on clicking it.
// onClick={handleClick}           actual implementation.
// onClick={handleClick()}         wrong in most cases, immediately runs on rendering
// onClick={() => handleClick()}   the returned value of handleClick is wrapped into a callback function.
// onClick={() => handleClick(5)}  correct for arguments passing.