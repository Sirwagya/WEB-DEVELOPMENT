import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contacts.jsx'
import NotFound from './components/Notfound.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center text-center font-bold bg-gray-700 text-zinc-300 text-5xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App