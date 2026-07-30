import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contacts.jsx'
import NotFound from './components/Notfound.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App