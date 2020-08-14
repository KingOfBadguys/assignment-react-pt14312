import React from 'react'

const Header = props => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">
                            LOOKING FOR YOUR FAVORITE CLOTHES AND SHOES OF
                            YOUR STYLE</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">Contact us to find more information about our
                            products!</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#contact">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;