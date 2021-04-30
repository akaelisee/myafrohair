import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return (
        <div className="nav"> 
            <div className="navbar">
                <div className="navbar__logo">
                    <span> logo </span>
                </div>
                <div className="navbar__center">
                    <Link to ='/' className="navbar__item active"> Home </Link>
                    <Link to ='/' className="navbar__item"> Catalogue </Link>
                    <Link to ='/' className="navbar__item"> About </Link>
                    <Link to ='/' className="navbar__item"> Blog </Link>
                    <Link to ='/' className="navbar__item"> Reservation </Link>
                </div>
                <div className="navbar__sign">
                    <Link to ='/' className="sign__item"> Login </Link>
                    <Link to ='/' className="sign__item"> Sign up </Link>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
