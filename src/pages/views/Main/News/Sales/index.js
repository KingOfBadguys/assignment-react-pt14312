import React from 'react'
import { Link } from 'react-router-dom'

const Sales = props => {
    return (
        <div className="container">
            <h1 className="text-center">Sales</h1>
            <div className="row">
                <div className="col-sm-7">
                    <div className="row">
                        <div class="col-sm-12">
                            <h2 className="text-center">
                                7 bestseller clothes on June
                                </h2>
                            <p className="text-muted ">
                                Last year marked the first time online retail sales exceeded those of brick and mortar shops, and that was before 2020 came along and forced everyone to stay home. Nowadays, we're more inclined to click through a website than enter a department store. Whether you're adding to cart via Instagram or you drunkenly bought a vintage Chanel jacket and a dolphin necklace from your bed at 2AM (no regrets), shopping online is so damn simple. While major e-commerce sites like Amazon and Nordstrom still dominate as shopping destinations, it's worth bookmarking the unsung indie boutiques, direct-to-consumer brands, and little-known labels that offer something different from the normal retailer. Some of our favorites below.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/online-boutiques-080620-index-1596741504.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
                        width='100%' />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="text-center">
                                Best seller on May
                                </h2>
                            <p className="text-muted ">
                                Sincerely, Tommy is where all your cool Brooklyn friends flock. The IRL coffee and fashion store is decked out in concrete and decorated with modern sculptures and plants you can't name. The shop sells its affordable in-house label alongside indie brands like Gauntlett Cheng, making it a one-stop shop for all your high-low needs. These days its website is more accessible than its Bed-Stuy storefront, but the experience is equally peaceful (you will, however, miss out on their excellent matcha lattes and attractive baristas).</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <a href="https://firebasestorage.googleapis.com/v0/b/upload-images-abd5c.appspot.com/o/images%2Fbest-seller1.png?alt=media&token=d3d16223-8cd9-47fe-b869-d2ad2d72391b">
                        <img src="https://firebasestorage.googleapis.com/v0/b/upload-images-abd5c.appspot.com/o/images%2Fbest-seller1.png?alt=media&token=d3d16223-8cd9-47fe-b869-d2ad2d72391b"
                            width='100%' />
                    </a>
                </div>
            </div>
        </div>
    )
}

Sales.propTypes = {

}

export default Sales
