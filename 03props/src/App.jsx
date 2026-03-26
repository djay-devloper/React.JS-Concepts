import './App.css'
import Card from './components/cards'

function App() {

  return (
    <>

      <Card name= "Dhananjay" age= {22} isStudent= {true}/>

      <Card name= "Mohan" age= {40} isStudent= {false}/>

      <Card name= "Shubham" age= {25} isStudent= {false}/>
    </>
  )
}

export default App

// We imported card component and then App.jsx is sending data to card component or reusing it.
// This is the actual use case where we are using a component, created once but everytime we pass different data to it.


// prototype= a mechanism that ensures that the passed value is of the correct datatype.
// age: Proptypes.number