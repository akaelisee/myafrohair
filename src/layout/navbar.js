import React, { useEffect }  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
                    <span style={isNav ? {color:'#1B4D4A'} : null}> logo </span>
                </div>
                <div className="navbar__center">
                    <Link to ='/' className={isNav ? 'navbar__item' : 'navbar__item active'} style={isNav ? {color:'#1B4D4A', fontWeight: 700} : null}> Home </Link>
                    <Link to ='/' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Catalogue </Link>
                    <Link to ='/' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> About </Link>
                    <Link to ='/' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Blog </Link>
                    <Link to ='/reservation' className="navbar__item" style={isNav ? {color:'#1B4D4A'} : null}> Reservation </Link>
                </div>
                <div className="navbar__sign">
                    <Link to ='/' className="sign__item" style={isNav ? {color:'#1B4D4A'} : null}> Login </Link>
                    <Link to ='/' className="sign__item" style={isNav ? {color:'#1B4D4A'} : null}> Sign up </Link>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    isNav: PropTypes.bool
}

export default Navbar
