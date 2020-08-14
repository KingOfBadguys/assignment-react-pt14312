import React from 'react'
import { Link } from 'react-router-dom'

const News = ({ children }) => {
    return (
        <section className="page-section" id="news">
            <div className="container">
                {/*  */}
                <h2 className="text-center mt-0">News</h2>
                <hr className="divider my-4" />
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <Link to="/news/sale">
                                <i className="fas fa-4x fa-gem text-primary mb-4" />
                            </Link>
                            <h3 className="h4 mb-2">Sales</h3>
                            <p className="text-muted mb-0">Check out some good promotions!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <Link to="/news/future">
                                <i className="fas fa-4x fa-globe text-primary mb-4" />
                            </Link>
                            <h3 className="h4 mb-2">Ready to Publish</h3>
                            <p className="text-muted mb-0">New brands and styles is coming!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="mt-5">
                            <Link to="/news/trend">
                                <i className="fas fa-4x fa-heart text-primary mb-4" />
                            </Link>

                            <h3 className="h4 mb-2">Trend</h3>
                            <p className="text-muted mb-0">You want to take the trend! Here is yours!</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                {children}
            </div>
        </section>
    )
}

export default News
