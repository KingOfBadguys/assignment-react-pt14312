import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({ children, listCategory }) => {
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <h1>Category</h1>
                </div>
                <div className="row no-gutters">
                    {listCategory.map((categories, index) => (
                        <div className="col-lg-3 col-sm-6" key={index}>
                            <Link className="portfolio-box" to={"/category/pro/" + categories.cateName} >
                                <img className="img-fluid" src={categories.image} />
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">{categories.cateName}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <br />
            {children}
        </div>

    )
}

export default Categories
