import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from '../Layout.jsx';
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import Github, { getGithubInfo } from './assets/components/Github/Github.jsx';
import Users from './assets/components/User/Users.jsx';
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

      },
      {
        path:'contact',
          element:<Contact/>

      },
      {
        path:'Github',

        //funtion can be passed implicitly too
        //getGithubInfo provides fetched data to loader
          loader:getGithubInfo,
          element:<Github/>

      },
      {
        path:'Users/:userId',
      
          element:<Users/>

      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
