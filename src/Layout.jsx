import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    {/* outlet changes the component in it and not changes header and footer.. */}
    <Footer />
    </>
  )
}

export default Layout