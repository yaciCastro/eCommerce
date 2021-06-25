import React from 'react'
import CartWidget from "../CartWidget/CartWidget.js"
import { BrowserRouter as Router, Link} from "react-router-dom";
import './NavBar.css'

function NavBar() {
        return (
            <nav className="nav">
                <script src="https://kit.fontawesome.com/7e5b2d153f.js" crossorigin="anonymous"></script>
                <div className="nav-div">
                    <a className="logo nav-link">Logo</a>
                <button class="nav-toggle" aria-label="Abrir menú">
                    <i class="fas fa-bars"></i>
                </button>
                <Router>
                    <ul className="nav-menu nav-menu_visible">
                        <li className="nav-menu-item">
                            <Link to='/servicios' className="nav-menu-link nav-link">Servicios</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to='/diseños' className="nav-menu-link nav-link">Diseños</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to='/galeria' className="nav-menu-link nav-link">Galeria</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to='/contacto' className="nav-menu-link nav-link">Contacto</Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link to='/carrito'><CartWidget/></Link>
                        </li>
                    </ul>
                </Router>
            </div>
        </nav>
    )

}
export default NavBar;