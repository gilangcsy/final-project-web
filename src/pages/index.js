import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../assets/style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from '../components/Hero'
import MainContent from '../components/MainContent'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'

const Home = () => {
    const [
        isOpen,
        setIsOpen
    ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Router>
                
                <Navbar isOpen={isOpen} toggle={toggle} />
            </Router>
        </>
    )
}

export default Home
