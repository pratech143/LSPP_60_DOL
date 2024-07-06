import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import Store from '../store/store.js'
import { AddExpenses,Category,ExpenseList } from './Components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:"",
        element:<Body/>
      },
      {
        path:'category',
        element:<Category/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <RouterProvider router ={router}/>
  </Provider>
)
