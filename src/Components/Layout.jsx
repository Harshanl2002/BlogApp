import React from 'react'
import { Outlet } from 'react-router';
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="text-primary overflow-clip bg-[#dafada]">
    <Header />
        <Outlet/>
    <Footer />
    </div>
  )
}

export default Layout;