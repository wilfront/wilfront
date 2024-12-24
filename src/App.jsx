import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Home3 from "./pages/Home3/Home3"



function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="nav-header">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<Home3/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
