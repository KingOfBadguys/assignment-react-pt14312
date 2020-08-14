import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutAdmin from '../pages/layouts/LayoutsAdmin'
import LayoutHome from '../pages/layouts/LayoutHome';
import ProductManager from '../pages/views/Admin/Products/ProductManager';
import AddProduct from '../pages/views/Admin/Products/AddProduct';
import Edit from '../pages/views/Admin/Products/Edit';
import CateList from '../pages/views/Admin/Categories/CateList';
import Dashboard from '../pages/views/Admin/Dashboard';
import Categories from '../pages/views/Main/Categories';
import Goods from '../pages/views/Main/Categories/Goods';
import AddCategory from '../pages/views/Admin/Categories/AddCategory';
import EditCate from '../pages/views/Admin/Categories/EditCate';
import About from '../pages/views/Main/About';
import News from '../pages/views/Main/News';
import Register from '../pages/views/Main/Register';
import Login from '../pages/views/Main/Login';
import Sales from '../pages/views/Main/News/Sales';
import Trend from '../pages/views/Main/News/Trend';
import GoodsDetail from '../pages/views/Main/Categories/GoodsDetail';


const Routers = ({
    /*Product*/ listProduct, onRemove, onAdd, onEdit,
    /*Category */listCategory, onCateRemove, onAddCate, onEditCate }) => {

    const handleRemove = (id) => {
        onRemove(id)
    }
    const handleEdit = (id) => {
        onEdit(id)
    }
    const handleEditCate = (cateID) => {
        onEditCate(cateID);
    }

    // categories
    const handleRemoveCate = (cateID) => {
        onCateRemove(cateID)
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/admin/:path?/:path?" exact>
                        <LayoutAdmin>
                            <Switch>
                                {/* Products */}
                                <Route path="/admin/products">
                                    <ProductManager listProduct={listProduct} onRemove={handleRemove}
                                    />
                                </Route>
                                <Route path="/admin/dashboard">
                                    <Dashboard listProduct={listProduct} listCategory={listCategory} />
                                </Route>
                                <Route path="/admin/addProduct">
                                    <AddProduct listCategory={listCategory} onAdd={onAdd} listProduct={listProduct} />
                                </Route>
                                <Route path="/admin/proEdit/:id?">
                                    <Edit listProduct={listProduct} onEdit={handleEdit} listCategory={listCategory} />
                                </Route>

                                {/* Categories */}
                                <Route path="/admin/categories">
                                    <CateList listCategory={listCategory} onCateRemove={handleRemoveCate} />
                                </Route>

                                <Route path="/admin/addCate">
                                    <AddCategory onAddCate={onAddCate} />
                                </Route>

                                <Route path="/admin/cateEdit/:id?">
                                    <EditCate onEditCate={handleEditCate} listCategory={listCategory} />
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route path="/:path?">
                        <LayoutHome>
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/news/:path?">
                                    <News>
                                        <Switch>
                                            <Route path="/news/sale">
                                                <Sales />
                                            </Route>
                                            <Route path="/news/trend">
                                                <Trend />
                                            </Route>
                                        </Switch>
                                    </News>
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/register">
                                    <Register />
                                </Route>
                                <Route path="/category/:path?/:path?">
                                    <Categories listCategory={listCategory}>
                                        <Switch>
                                            <Route path="/category/pro/:cateName?" >
                                                <Goods listProduct={listProduct} />
                                            </Route>
                                            <Route path="/category/details/:id?">
                                                <GoodsDetail listProduct={listProduct} />
                                            </Route>
                                        </Switch>
                                    </Categories>
                                </Route>
                            </Switch>
                        </LayoutHome>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Routers
