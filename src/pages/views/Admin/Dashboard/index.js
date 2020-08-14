import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({ listProduct, listCategory }) => {
    const countPro = listProduct.length;
    const countCate = listCategory.length;
    // console.log(listProduct)

    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">content_copy</i>
                        </div>
                        <p className="card-category">Quantity of product</p>
                        <h3 className="card-title">{countPro}
                            <small>/goods</small>
                        </h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-success">infor</i>
                            <Link to="/admin/products">See all products</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">store</i>
                        </div>
                        <p className="card-category">Category</p>
                        <h3 className="card-title">{countCate}
                            <small>/cate</small>
                            </h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-success">infor</i>
                            <Link to="/admin/categories">See all category</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">info_outline</i>
                        </div>
                        <p className="card-category">Fixed Issues</p>
                        <h3 className="card-title">75</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">local_offer</i> Tracked from Github
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                        <div className="card-icon">
                            <i className="fa fa-twitter" />
                        </div>
                        <p className="card-category">Followers</p>
                        <h3 className="card-title">+245</h3>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">update</i> Just Updated
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
