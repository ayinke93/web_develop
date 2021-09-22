import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HomeComponents.css';

function Sellers({image}) {
    return (
        <div className="sellersitem">
            <Link>
                <img src={image} alt="img" />
            </Link>
        </div>
    )
}

export default Sellers
