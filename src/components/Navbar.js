import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 3000)
    return (
        // use Link tags instead of HREF to use REACT to grab components to prevent page from having to reload
        // when we use the NavLink tag you will get the "active parameter"
        <nav className="nav-wrapper red darken-3">      
            <div className="container">
            <a href="/" className="brand-logo">Poke Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);