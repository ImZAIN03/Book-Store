import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <nav>Site Logo</nav>
      <Outlet/>
    </>
  )
}

export default App