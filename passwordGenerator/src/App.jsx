import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setlength]= useState(8)
  const[numberAllowed, setNumberAllowed]= useState(false)
  const[symbolAllowed, setSymbolAllowed]= useState(false)
  const[password, setPassword]= useState("")


  //Using useRef hook to target the password and copying it on clipboard.
  //useRef is a React hook that lets you store a value that stays the same between renders like HTML elements.
  let passwordRef= useRef(null) 


  // It is a react hook which prevents from unneccessary re-rendering
  // useCallback will return a memoized version of the callback that only changes if one of the dependecy has changed.
  const passwordGenerator= useCallback(()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"

    if(symbolAllowed) str+= "@#$%&?/:;"

    for(let i=1; i<=length; i++){

      let index= Math.floor(Math.random() * str.length)
      pass+= str.charAt(index)

    }

    setPassword(pass)

  }, [length, numberAllowed, symbolAllowed, setPassword])


  // Think of it like- “After React shows the UI, now do this extra work.”
  // Used for API calls and timers.
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, symbolAllowed, passwordGenerator])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  return (
    <>

      <div className="w-full max-w-md h-[130px] mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center">

        <h1 className='text-center text-white my-5'>Password Generator</h1>

        {/* Placeholder and copy button. */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          //useRef will use it as reference 
          ref= {passwordRef}/>

          <button onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>

        {/* div of length numbers and symbols */}
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
            className='cursor-pointer'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {symbolAllowed}
            id='symbolInput'
            className='cursor-pointer'
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
