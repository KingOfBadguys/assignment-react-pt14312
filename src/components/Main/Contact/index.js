import React from 'react'

const Contact = props => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider my-4" />
                        <p className="text-muted mb-5">Get started to support us and feedback aboout our website and service!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted" />
                        <div>+84 969573440</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                        {/* Make sure to change the email address in BOTH the anchor text and the link target below!*/}
                        <a className="d-block" href="mailto:tienhcph09359@fpt.edu.vn">tienhcph09359@fpt.edu.vn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

Contact.propTypes = {

}

export default Contact
