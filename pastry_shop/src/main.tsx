import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About.tsx'
import Dashboard from './Dashboard.tsx'

const route = createBrowserRouter([
  {  path:'/' , element:<App/> },
  {  path:'/about' , element:<About/> },
  {  path:'/dashboard' , element:<Dashboard/> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
