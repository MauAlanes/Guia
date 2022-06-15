import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import Pagdos from '../components/Pagdos'
import Paguno from '../components/Paguno'
import "../styles/Header.css"

function Navbar() {
    return (
        <BrowserRouter>
            <header className='menu'>
                <h1>Primer Menu</h1>
                <nav>
                    <ul className='ul-menu'>
                        <NavLink to="/Home">
                        <li>Home</li>
                        </NavLink>
                        <NavLink to="/Paguno">
                        <li>Pagina uno</li>
                        </NavLink>
                        <NavLink to="/Pagdos">
                        <li>Pagina dos</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/Home' element={ <Home/> } />
                <Route path='/Paguno' element={ <Paguno/> } /> 
                <Route path='/Pagdos' element={ <Pagdos/> } />
                <Route path='/*' element={ <Home/> } />
            </Routes>
        </BrowserRouter>
    )
}

export {Navbar}