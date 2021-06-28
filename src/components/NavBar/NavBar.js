import React from 'react'
import CartWidget from "../CartWidget/CartWidget.js"
import { BrowserRouter as Link} from "react-router-dom";
import logo from '../../img/aro-de-bordado.svg'
import './NavBar.css'

function NavBar() {
        return (
            <nav className="nav">
                <div className="nav-div">
                        <img className="logo1 nav-link" alt="" src={logo}/>
                    <button class="nav-toggle" aria-label="Abrir menú">
                        <i class="fas fa-bars"></i>
                    </button>
                        <ul className="nav-menu nav-menu_visible">
                            <li className="nav-menu-item">
                                <Link to='/inicio' className="nav-menu-link nav-link">Inicio</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to='/servicios' className="nav-menu-link nav-link">Servicios</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to='/productos' className="nav-menu-link nav-link">Productos</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to='/contacto' className="nav-menu-link nav-link">Contacto</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to='/carrito'><CartWidget/></Link>
                            </li>
                        
                        </ul>
                    </div>
        </nav>
    )

}
export default NavBar;