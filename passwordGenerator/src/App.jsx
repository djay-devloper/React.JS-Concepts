import { useCallback, useState } from 'react'
import './App.css'

function App() {

  const [length, setlength]= useState(8)
  const[numberAllowed, setNumberAllowed]= useState(false)
  const[symbolAllowed, setSymbolAllowed]= useState(false)
  const[password, setPassword]= useState("")

  // It is a react hook which prevents from unneccessary re-rendering
  // useCallback will return a memoized version of the callback that only changes if one of the dependecy has changed.
  const passwordGenerator= useCallback(()=>{
    const pass= ""
    const str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"

    if(symbolAllowed) str+= "@#$%&?/:;"

    for(let i=1; i<=length; i++){

      let index= Math.floor(Math.random() * str.length)
      pass+= str.charAt(index)

    }

    setPassword(pass)

  }, [length, numberAllowed, symbolAllowed, setPassword])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center'>
        <h2 className='text-center text-white'>Password Generator</h2>

        {/* Placeholder and copy button. */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        {/* div of length number and symbol */}
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {symbolAllowed}
            id='symbolInput'
            onChange={()=>{
              setSymbolAllowed((prev)=> !prev);
            }}/>
            <label htmlFor="symbolInput">Symbols</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
