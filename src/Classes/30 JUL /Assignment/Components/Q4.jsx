import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Q4Pages/Home'
import AboutUs from './Q4Pages/AboutUs'
import ContactUs from './Q4Pages/ContactUs'

const Q4 = () => {
	return (
		<BrowserRouter>
			<div className='p-4'>
				<nav className='mb-4 flex flex-wrap gap-3'>
					<Link to='/'>
							Home
						</Link>
						<Link to='/about-us'>
							About Us
						</Link>
						<Link to='/contact-us'>
							Contact Us
						</Link>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/contact-us' element={<ContactUs />} />
				</Routes>
				</div>
		</BrowserRouter>
	)
}

export default Q4
