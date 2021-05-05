import React, { useEffect }  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ImageStory from '../assets/img/logo.jpg'

const Navbar = ({isNav}) => {

    const bar = {
        backgroundColor: '#fff', 
        boxShadow: '1px 2px 10px 1px #000',
        color: ''
    }

    const bar1 = {
        backgroundColor: 'transparent', 
    }

    return (
        <div className="nav" style={isNav ? bar : bar1}> 
            <div className="navbar">
                <div className="navbar__logo">
                <img src ={ImageStory} alt="logo" />
                </div>
                <div className="navbar__center">
                    <Link to ='/' className={isNav ? 'navbar__item' : 'navbar__item active'} style={isNav ? {color:'#1B4D4A', fontWeight: 700} : null}> Home </Link>
                    <Link to ='/' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> About </Link>
                    <Link to ='/catalogue' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Catalogue </Link>
                    <Link to ='/reservation' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Reservation </Link>
                    <Link to ='/' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Espace client </Link>
                    <Link to ='/' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Espace pro </Link>
                    <Link to ='/registerhairdresser' className="navbar__item btn__pro" style={isNav ? {color:'#1B4D4A'} : null}> Devenir coiffeur(e) </Link>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    isNav: PropTypes.bool
}

export default Navbar
