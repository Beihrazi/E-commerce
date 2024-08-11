import React from 'react'
import Pay from './components/Pay'
import{ Route, Routes } from "react-router-dom"
import Success from './components/Success'

const App = () => {
  return (
    <Routes>
      <Route path='/pay' element={<Pay />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  )
}

export default App