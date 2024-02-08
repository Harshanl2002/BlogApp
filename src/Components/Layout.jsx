import React from 'react'
import { Outlet } from 'react-router';
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="text-primary overflow-clip bg-green-50 min-h-[100vh] flex flex-col justify-between">
    <Header className="sticky top-0 " />
        <Outlet/>
    <Footer />
    </div>
  )
}

export default Layout;