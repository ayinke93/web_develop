import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Searches.css'

function Searches({text}) {
    return (
        <div className="searchtxt">
            <Link>
                <button className="search-btn">
                    {text}
                </button>
            </Link>
        </div>
    )
}

export default Searches
