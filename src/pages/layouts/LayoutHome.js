import React from 'react'
import Nav from '../../components/Main/Navbar';
import Contact from '../../components/Main/Contact';
import Footer from '../../components/Main/Footer';


export default ({ children }) => {
    return (
        <div id="page-top">
            <Nav />
            <br/><br/><br/>
            {/* Category*/}
            <div >
                {children}
            </div>
            
            <Contact />
            <Footer />
        </div>
    )
}