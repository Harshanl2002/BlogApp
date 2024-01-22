import React from 'react'
import { Outlet } from 'react-router';
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="overflow-hidden text-primary">
    <Header />
        <Outlet/>
    <Footer />
    </div>
  )
}

export default Layout;