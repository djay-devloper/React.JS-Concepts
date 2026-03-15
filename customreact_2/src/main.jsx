import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

//Creating a react component inside main which is also a JS function
function MyApp(){
    return(
        <h3>I am a react component created inside main.jsx and then rendered. 
            Usualy i am created inside App.jsx but right now I'm not.
        </h3>
    )
}

//In customReact App we created our own reactElement but the React.createElement() method return a reactElement object.
//The parameters, syntax, schema of this object is predefined in react.
//Also in the end each react component is parsed as the same reactElement object.

//So we are able to render these object by passing it directly instead of passing a component. look down
const reactElement= React.createElement(
    'a', 
    {href: 'https://google.com', target: '_blank'}, 
    'Click me to visit google'
)



createRoot(document.getElementById('root')).render(

    // <MyApp/>
    // MyApp()
    <App />
    // reactElement

)
