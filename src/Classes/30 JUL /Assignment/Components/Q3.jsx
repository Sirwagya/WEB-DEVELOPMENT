import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Q3Pages/Home'
import Pizza from './Q3Pages/Pizza'
import Burger from './Q3Pages/Burger'
import Drinks from './Q3Pages/Drinks'

const Q3 = () => {
	return (
		<BrowserRouter>
			<div className='p-4'>
				<nav className='mb-4 flex flex-wrap gap-3'>
					<Link to='/'>
							Home
						</Link>
						<Link to='/pizza'>
							Pizza
						</Link>
						<Link to='/burger'>
							Burger
						</Link>
						<Link to='/drinks'>
							Drinks
						</Link>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pizza' element={<Pizza />} />
					<Route path='/burger' element={<Burger />} />
					<Route path='/drinks' element={<Drinks />} />
				</Routes>
				</div>
		</BrowserRouter>
	)
}

export default Q3
