import React from 'react'
import PropTypes from 'prop-types'

const Trend = props => {
    return (
        <div className="container">
            <h1 className="text-center">12 Standout Trends That Ruled the Spring 2020 Runways</h1> <br />
            <div className="row">
                <div className="col-sm-7">
                    <div className="row">
                        <div class="col-sm-12">
                            <h2 className="text-center">
                                1. The Disco Collar
                            </h2>
                            <p className="text-muted ">
                                And just like that disco’s not dead. The wide collar favored by the Studio 54 set made a surprise comeback on the spring 2020 runways. Modernized on coats, jackets, and button-downs at Lanvin, Ferragamo, JW Anderson, and beyond, the look is often shown with contrasting colors to make it really stand out. Because what’s the point of a super collar if you can’t really see it?
                            <br />
                                The look is most impactful in jacket form—bonus points if it has a contrasting collar as seen on the Paco Rabanne runway.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <video width="100%" controls>
                        <source src="https://hmg-h-cdn.hearstapps.com/videos/01-70s-collars-1-1570453077.mp4" type="video/mp4" />
                        <source src="https://hmg-h-cdn.hearstapps.com/videos/01-70s-collars-1-1570453077.mp4" type="video/ogg" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="text-center">
                                2. Not Your Grandmother’s Crochet
                            </h2>
                            <p className="text-muted ">
                                Crochet is getting a cool update come spring. Think ultra-feminine dresses, polished suiting, and eveningwear that feels modern with a special touch of Grandma’s handmade crochet. As the fashion industry looks for ways to become more sustainable, there’s something special about a “trend” that embraces a slow, handmade technique that can be passed down generation after generation—à la that treasured family heirloom that lasts forever.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <video width="100%" controls>
                        <source src="https://hmg-h-cdn.hearstapps.com/videos/05-crochet-1570457116.mp4" type="video/mp4" />
                        <source src="https://hmg-h-cdn.hearstapps.com/videos/05-crochet-1570457116.mp4" type="video/ogg" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
            <hr />
            <h6>All the information above from <a href="https://www.harpersbazaar.com/fashion/trends/g28969877/spring-2020-fashion-trends/">www.harpersbazaar.com</a></h6>
        </div>
    )
}

Trend.propTypes = {

}

export default Trend
