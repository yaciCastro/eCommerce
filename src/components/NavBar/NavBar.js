import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav className="nav">
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
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;