import React, { useState } from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    const [isActiveClass, setIsActiveClass] = useState(false);

    const handleIsActiveClass = () => {
        setIsActiveClass(!isActiveClass)
    }

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                    <a
                        href="#!"
                        role="button"
                        className={isActiveClass ? "is-active navbar-burger burger is-active" : "navbar-burger burger"}
                        onClick={handleIsActiveClass}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={isActiveClass ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>

                        <Link to="/about" className="navbar-item">
                            About
                        </Link>
                        </div>
                    </div>
                </nav>
    )
}

export default Navbar;