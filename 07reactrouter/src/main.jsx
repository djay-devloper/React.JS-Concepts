import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact Us/ContactUs.jsx'
import User from './components/User/User.jsx'

// these are the std way to define and render the routes
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github, { GithubInfoLoader } from './components/Github/Github.jsx'

// This is an another method of creating router.
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contactUs',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router_me= createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<App />}>
      <Route index element={<Home/>}></Route>
      <Route path='About' element={<About/>} />
      <Route path='ContactUs' element={<Contact/>} />

      {/* Dynamic Routing */}
      {/* here userid is parameter which can be accessed through url */}
      <Route path='User/:userid' element={<User/>} />
      <Route 
        path='Github' 
        element={<Github/>}
        loader= {GithubInfoLoader}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router_me} />
  </StrictMode>
)

// path: exact file name.
// element: exact react component to render bcz a file can have multiple components.