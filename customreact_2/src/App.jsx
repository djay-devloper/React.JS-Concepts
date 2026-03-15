function App() {
  const variable= "I am a variable and inserted by using curly braces"

  return (
    <>
    
      {/*Variable insertion means JS insertion but you can't insert a whole block of JS. Insert only evaluated 
      values. because in the end this component is parsed as reactElemnt object and there variables are inserted
      in the end. so it will make it messy. */}
      <h1>I am a componenet. {variable}</h1>

    </>
  )
}

export default App
