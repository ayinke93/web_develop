import React from 'react'
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
           <div className="leftside">
                <img className="logo-image" src={Logo} alt='img'/>
            </div> 
           <div className="rightside">
               <Link to="/">Home</Link>
                <Link to="/inspirations">Inspirations</Link>
                <Link to="/search">Search</Link>
                <Link to="/sign in">Sign in</Link>
                <Link to="/sign up">Sign up</Link>
           </div> 
        </div>
    )
}

export default Navbar
