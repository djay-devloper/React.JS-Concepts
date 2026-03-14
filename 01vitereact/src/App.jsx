import Chai from "./Chai"

function App() {
  
  return (

    //In JSX you can return only one element like either chai or h1, so we use empty tag/fragment but in that many element are present.
    <>
    <h1>Hello World with Vite</h1>
    <Chai/>
    <p>I am para </p>
    </>
  )
}

export default App

//We use .jsx extension in vite every time. It is strictly forced.