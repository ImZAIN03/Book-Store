import React from 'react'
import { Outlet } from 'react-router-dom'
import BooksNavbar from './BooksNavbar.jsx'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <BooksNavbar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout