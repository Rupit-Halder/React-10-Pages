import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'
import Last from '../footer under/Last'

const Layout = () => {
  return (
   <> 
     <Menu/>
     <Outlet/>
     <Footer/>
     <Last/>
   </>
  )
}

export default Layout