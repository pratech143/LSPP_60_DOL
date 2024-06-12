import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './src/assets/components/Header/Header'
import Footer from './src/assets/components/Footer/Footer'

function Layout() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout