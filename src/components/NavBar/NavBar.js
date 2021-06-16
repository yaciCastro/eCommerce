import React, { Component } from 'react'
import CartWidget from "../CartWidget/CartWidget.js"

class NavBar extends Component {
    
    render() {
        return (
            <nav className="nav">
                <script src="https://kit.fontawesome.com/7e5b2d153f.js" crossorigin="anonymous"></script>
                <div className="nav-div">
                    <a className="logo nav-link">Logo</a>
                    <button class="nav-toggle" aria-label="Abrir menú">
                        <i class="fas fa-bars"></i>
                    </button>
                    <ul className="nav-menu nav-menu_visible">
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link">Servicios</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link">Diseños</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link">Galeria</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link">Contacto</a>
                        </li>
                        <li className="nav-menu-item">
                            <a><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;