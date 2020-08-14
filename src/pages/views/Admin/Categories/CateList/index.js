import React from 'react'
import { Link } from 'react-router-dom'

const CateList = ({ listCategory, onCateRemove }) => {
    // let { id } = useParams();
    const handleRemove = (id) => {
        // console.log(id, 'catelist.js')
        if (window.confirm('Confirm to delete this cate')) {
            onCateRemove(id);
            alert('Delete successs');
        }
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-plain">
                    <div className="card-header card-header-primary " style={{ textAlign: 'center' }}>
                        <h4 className="card-title mt-0"> Cate manager!!!</h4>
                        <Link className="card-category" to="/admin/addCate"> Add new Cate here!!!</Link>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Cate ID</th>
                                        <th>Category name</th>
                                        <th>Cate image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCategory.map((listCategory, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{listCategory.id}</td>
                                            <td>{listCategory.cateName}</td>
                                            <td><img src={listCategory.image} width='60px' height='60px' /> </td>
                                            <td>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(listCategory.id)}>Remove</button>
                                                <Link className="btn btn-outline-primary btn-sm" to={"/admin/cateEdit/" + listCategory.id} >Edit</Link>

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

CateList.propTypes = {

}

export default CateList
