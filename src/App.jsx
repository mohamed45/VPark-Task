import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <div className='app-body'>

      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    

    </div>
    </>
  )
}

export default App
