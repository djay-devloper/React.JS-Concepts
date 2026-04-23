import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

// step 3:- Wrapping up the main App componenet inside Provider, so that every other componenet inside App can consume
// it. Beacuse the App is papa of all.

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App/>
  </UserContextProvider>
)
