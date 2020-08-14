import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Goods = ({ listProduct }) => {
    let { cateName } = useParams();
    // console.log(cateName,'Catename')
    const [products, setProducts] = useState(listProduct.filter(pro => pro.category === cateName));
    const product = products[0];
    console.log(products,'goods.js')

    return (
        <div className="row">
            <div className="col-md-12">

                <div className="card card-plain" >

                    <div className="card-header card-header-primary " style={{ textAlign: 'center' }}>
                        <h4 className="card-title mt-0">List product of {product.category}!!!</h4>
                        <Link className="card-category" to="/category"> Back to category!!</Link>
                    </div>
                    <div className="container">
                        <div className="row">
                            {products.map((pro, index) => (
                                <div className="col-sm-3" key={index}>
                                    <div className="card" style={{ backgroundColor: '#f2ccff', borderColor: '' }}>
                                        <Link to={'/category/details/' + pro.id}>
                                            <img className="card-img-top" src={pro.image} width='100%' height='200px' />
                                        </Link>
                                        <div className="card-body">
                                            <h4 className="card-title">Product name:  {pro.proName}</h4>
                                            <p className="card-text">Price: {pro.price}</p>
                                            <p className='text-muted'>Promotion: {pro.promotion}</p>
                                            <p>{pro.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Goods.propTypes = {

}

export default Goods
