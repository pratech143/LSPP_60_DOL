import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from '../Layout.jsx';
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
          path:'',
          element:<Home/>
      },
      {
        path:'about',
          element:<About/>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
