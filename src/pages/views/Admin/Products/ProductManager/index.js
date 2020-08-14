import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const ProductManager = ({ listProduct, onRemove }) => {
    const { handleSubmit } = useForm();
    const onHandleSearch = (data) => {
        console.log(data, 'productmanager')
    }
    const handleRemove = (id) => {
        console.log(id)
        if (window.confirm('Confirm to do this action')) {
            onRemove(id)
            alert('remove success')
            // history.replace('/admin/products', listProduct)
        }
    }
    return (

        <div className="row">
            <div className="col-md-12">
                <div className="card card-plain">
                    <div className="card-header card-header-primary " style={{ textAlign: 'center' }}>
                        <h4 className="card-title mt-0"> Product manager!!!</h4>
                        <Link className="card-category" to="/admin/addProduct"> Add new Product here!!!</Link>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <form onSubmit={handleSubmit(onHandleSearch)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Product name</label>
                                            <input type="text" className="form-control" placeholder="Search by product name" 
                                            name='search' />
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div className="form-group">
                                            <br/>
                                            <button type="submit" className="btn btn-outline-success btn-sm ">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <table className="table table-hover">
                                <thead >
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Promotion</th>
                                        <th>Image</th>
                                        <th>Color</th>
                                        <th>Description</th>
                                        <th>Made</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listProduct.map((products, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{products.id}</td>
                                            <td>{products.proName}</td>
                                            <td>{products.category}</td>
                                            <td>{products.price}</td>
                                            <td>{products.promotion}</td>
                                            <td><img src={products.image} width='60px' height='60px' /></td>
                                            <td>{products.color}</td>
                                            <td>{products.description}</td>
                                            <td>{products.made}</td>
                                            <td>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(products.id)}>Remove</button>
                                                <Link className="btn btn-outline-primary btn-sm" to={"/admin/proEdit/" + products.id} >Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductManager.propTypes = {

}

export default ProductManager
