import React from 'react'
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footleft">
                <img src={Logo} alt='img'/>
                <Link to="/about us">About us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/business">Lykdat for business</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footright">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <p> &copy; 2021 lykdat.com</p>
            </div>
        </div>
    )
}

export default Footer
