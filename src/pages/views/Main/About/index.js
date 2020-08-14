import React from 'react'
import {Link} from 'react-router-dom'

const About = props => {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">We've got what you need!</h2>
                        <hr className="divider light my-4" />
                        <p className="text-white-50 mb-4">Seeking and buy easily. User interface friendly and simply.</p>
                        <Link className="btn btn-light btn-xl js-scroll-trigger" to="/news">Get Started!</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;