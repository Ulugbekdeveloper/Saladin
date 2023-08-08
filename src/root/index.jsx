import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

 const Root = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='home' element={<h1>Home</h1>}/>
    <Route path='properties' element={<h1>Properties</h1>}/>
    <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}/>
    <Route path='/' element={<Navigate to={'home'}/>}/>
  </Routes>
  </BrowserRouter>
}

export default Root

