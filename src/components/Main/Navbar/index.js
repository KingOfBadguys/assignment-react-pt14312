import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">HOANG TIEN 09359-SHOP</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div LinkclassName="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/news">News</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/category">Categories</Link></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar
