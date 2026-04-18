import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// When you make nested routes in React Router, the parent component needs some place where the matched child 
// component should appear. That place is <Outlet />
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

// We are not gonna render App.jsx in main.jsx directly since we have congigured router-dom and we render the router. 
// Because now the router controls the UI. It decides which route/component to show.

// Here App.jsx is used as a layout componenet, like for every page home, about, contact us the header and footer part
// is same. outlet is changing according to route.