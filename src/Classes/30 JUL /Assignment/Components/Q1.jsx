import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Q1Pages/Home'
import About from './Q1Pages/About'
import ContactUs from './Q1Pages/ContactUs'
import Services from './Q1Pages/Services'

const Q1 = () => {
	return (
		<BrowserRouter>
			<div className='p-4'>
				<nav className='mb-4 flex flex-wrap gap-3'>
					<Link to='/'>
							Home
						</Link>
						<Link to='/about'>
							About
						</Link>
						<Link to='/contact'>
							Contact Us
						</Link>
						<Link to='/services'>
							Services
						</Link>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<ContactUs />} />
					<Route path='/services' element={<Services />} />
				</Routes>
				</div>
		</BrowserRouter>
	)
}

export default Q1
