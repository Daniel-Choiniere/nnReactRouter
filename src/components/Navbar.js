import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
//   THIS IS AN EXAMPLE OF A PROGRMATIC REDIRECT
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 3000)
    return (
        // use Link tags instead of HREF to use REACT to grab components to prevent page from having to reload
        // when we use the NavLink tag you will get the "active parameter"
        <nav className="nav-wrapper red darken-3">      
            <div className="container">
            <Link to="/" className="brand-logo">Poke Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

// apply the HOC withRouter to supercharge the component to apply properties to props
export default withRouter(Navbar);