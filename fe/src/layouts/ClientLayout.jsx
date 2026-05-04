import React, { createContext, useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/header'
import Footer from '../components/client/footer'
export const countCT = createContext()
const ClientLayout = () => {

  return (
    <countCT.Provider >
        <Header/>
        <Outlet/>
        <Footer/>
    </countCT.Provider>
  )
}

export default ClientLayout