import React from "react"
import {Link} from 'react-router-dom';
export function Nav(){
    return(
    <nav>
            <ul className="navigation">
                <li className="nav1"><a href="laptops.html" target="#">Main&nbsp;Menu</a></li>
                <li className="nav1"><Link to="/Laptop" >Products</Link></li>
                <li className="nav1"><Link to="/Admin">Admin</Link></li>
            </ul>
        </nav>
    )
}