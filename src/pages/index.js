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
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar isOpen={isOpen} toggle={toggle} />
                <Hero />
                <MainContent
                    title="Various types of make up."
                    type="upper"
                    mdoffset="2"
                    lgoffset="1"
                    img="main1.png"
                    width="100"
                />
                <MainContent
                    title="You need skincare too!"
                    type="lower"
                    mdoffset="0"
                    lgoffset="0"
                    img="skincare.png"
                    width="auto"
                />
                <Catalog
                    itemXs="1"
                    itemLg="4"
                />
                <Footer />
            </Router>
        </>
    )
}

export default Home
