import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Sidebar from '../Components/SideBar/SideBar'

const PrivateRoutes = () => {
  const token = sessionStorage.getItem("token")

  if (!token) {
    sessionStorage.clear()
    return <Navigate to="/" replace />
  }


  return (
    <div className="app-wrapper">
      <Header />

      <div className="layout-body">
        <Sidebar />

        <main className="layout-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default PrivateRoutes
