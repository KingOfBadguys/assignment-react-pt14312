import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <div className="sidebar" data-color="azure" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

  Tip 2: you can also add an image using data-image tag
    */}
            <div className="logo">
                <Link to="/admin" className="simple-text logo-normal">Admin page</Link></div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className="nav-item  ">
                        <Link className="nav-link" to="/admin/dashboard">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/admin/products">
                            <i className="material-icons">content_paste</i>
                            <p>Product list</p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/admin/users">
                            <i className="material-icons">content_paste</i>
                            <p>User list</p>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/admin/categories">
                            <i className="material-icons">content_paste</i>
                            <p>Cate list</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
