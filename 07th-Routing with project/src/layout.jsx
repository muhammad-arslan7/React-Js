import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
function Layout() {
  return (
    <div className='bg-gray-50'>
    <Header />
    <Outlet />
    <Footer />

    </div>
  )
}

export default Layout