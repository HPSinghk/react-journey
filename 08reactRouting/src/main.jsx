import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import Github,{githubInfoLoader} from './componenets/Github/Github.jsx'
import { createBrowserRouter,RouterProvider,Route, createRoutesFromElements } from 'react-router-dom'

const router =createBrowserRouter(
  createRoutesFromElements(
  <Route path='' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route 
    loader={githubInfoLoader}
    path='github'
    element={<Github/>}
    />
  </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
