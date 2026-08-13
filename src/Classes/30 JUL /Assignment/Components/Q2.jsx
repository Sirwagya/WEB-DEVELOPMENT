import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Q2Pages/Home'
import Projects from './Q2Pages/Projects'
import Resume from './Q2Pages/Resume'

const Q2 = () => {
	return (
		<BrowserRouter>
			<div className='p-4'>
				<nav className='mb-4 flex flex-wrap gap-3'>
					<Link to='/'>
							Home
						</Link>
						<Link to='/projects'>
							Projects
						</Link>
						<Link to='/resume'>
							Resume
						</Link>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/resume' element={<Resume />} />
				</Routes>
				</div>
		</BrowserRouter>
	)
}

export default Q2
