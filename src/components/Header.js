import React from 'react';
import { Link , NavLink} from '../../node_modules/react-router-dom';

export default function Header (){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/productos" className="navbar-brand">
                    React CRUD & Routing
                </Link>

                <ul>
                    <li>
                        <NavLink to="/productos" 
                        activeClassName="active"
                        className="nav-link">Productos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos/nuevo" 
                        activeClassName="active"
                        className="nav-link">Nuevo Producto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}