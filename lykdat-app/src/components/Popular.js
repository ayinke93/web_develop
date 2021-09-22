import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/HomeComponents.css";

function PopularItem({image,title}) {
    return (
        <div className="popCat">
            <Link to = '/'>
                <img src={image} alt="img" />
            </Link>
            <p>{title}</p>
        </div>
    );
}
export default PopularItem;
