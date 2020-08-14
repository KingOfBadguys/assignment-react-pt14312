import React from 'react'
import Sidebar from '../../components/Admin/Sidebar';
import NavBar from '../../components/Admin/NavBar';
import Footer from '../../components/Admin/Footer';

export default ({ children }) => {
    return (
        <div>
            <div className="wrapper ">
                <Sidebar />
                <div className="main-panel">
                    {/* Navbar */}
                    <NavBar />
                    {/* End Navbar */}
                    <div className="content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>

    )
}