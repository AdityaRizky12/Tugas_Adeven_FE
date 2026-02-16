import React from 'react'
import Navbar from "../component/navbar"
import Footer from "../component/footer"
import { Outlet } from 'react-router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>

      <Footer />
      <ToastContainer />
    </div>

  )
}

export default MainLayout