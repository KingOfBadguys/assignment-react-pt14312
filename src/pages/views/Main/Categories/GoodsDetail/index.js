import React from 'react'
import { Link, useParams } from 'react-router-dom'

const GoodsDetail = ({ listProduct }) => {
    let { id } = useParams();
    console.log(id, 'id')
    const product = listProduct.find(pro => pro.id.toString() === id.toString());
    console.log(product, 'product')

    return (
        <div className="container">
            <div className='row justify-content-center'>
                <div className="col-md-10" >
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="/admin/proDetails">
                                <img className="img" src={product.image} width='100%' />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-gray">
                                {product.category} made by: {product.made}
                            </h6>
                            <h3 className="card-title">{product.proName}</h3>
                            <h5 className="card-category text-gray">{product.price} VND</h5>
                            <p className='text-rose'> Sales: {product.promotion} VDN</p>
                            <p className="card-description">{product.description} </p>
                            <Link to="/category" className="btn btn-primary btn-round">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

GoodsDetail.propTypes = {

}

export default GoodsDetail
