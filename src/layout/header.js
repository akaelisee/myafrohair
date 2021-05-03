// @ts-nocheck
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NavBar from './navbar';
import {Link} from 'react-router-dom'
const Header = () => {
    const [isNav, setIsNav] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
        const show = window.pageYOffset > 80

        if (show) {
            setIsNav(true)
        } else {
            setIsNav(false)
        }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className="header">
            <div className="header__navbar">
                <NavBar isNav={isNav} />
            </div>
        </div>
    )
}

Header.propTypes = {
    
}

export default Header
