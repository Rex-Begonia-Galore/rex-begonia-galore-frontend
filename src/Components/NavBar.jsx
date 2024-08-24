import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    // State to track if the menu is open
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav">
            <div className="logo">
                <Link to="/">
                    <img src="/rex-begonias-galore-logo.png" alt="logo" className="navbar-logo" />
                </Link>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
          


            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-item">
                    <img src="/icons/home-icon.svg" alt="Home" className="nav-icon" />
                    <span>Home</span>
                </Link>

                <Link to="/about" className="nav-item">
                    <img src="/icons/catalog-icon.svg" alt="Catalog" className="nav-icon" />
                    <span>Catalog</span>
                </Link>

                <Link to="/begonias/add" className="nav-item">
                    <img src="/icons/add-icon.svg" alt="Add" className="nav-icon" />
                    <span>Add Begonia</span>
                </Link>

                <Link to="/begonias/:id" className="nav-item">
                    <img src="/icons/search-icon.svg" alt="Search" className="nav-icon" />
                    <span>Search</span>
                </Link>
            </div>
        </nav>
    );
}
