import React, { useState, useEffect } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'
import apiProRequest from './api/productApi'
import apiCateRequest from './api/categoriesApi'
import Routers from './routers';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  /*Use effect*/
  useEffect(() => {
    getProducts();
    getCategories();
  }, [], []);

  /*Product controller*/
  // Get All products
  const getProducts = async () => {
    try {
      const { data } = await apiProRequest.getAll();
      setProducts(data);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //Get by categories

  //Remove product
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiProRequest.remove(id);
      const newProducts = products.filter(pro => pro.id !== data.id);
      setProducts(newProducts);
      getProducts();
      console.log(newProducts, 'App')
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  };

  //Add Product
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiProRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error);
    }
  };

  // Edit product
  const onHandleEdit = async (product) => {
    try {
      const { data } = await apiProRequest.update(product.id, product);
      const newProduct = products.map(pro => (
        pro.id === data.id ? data : pro
      ));
      // console.log(product.id, 'id Pro app.js')
      setProducts(newProduct)
    } catch (error) {
      console.log('failed to request API: ', error);
    }
  }

  /*Category controller*/
  const getCategories = async () => {
    try {
      const { data } = await apiCateRequest.getAll();
      setCategories(data);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleRemoveCate = async (id) => {
    console.log(id)
    try {
      const { data } = await apiCateRequest.remove(id);
      console.log(data, ' dataCate app.js')
      const newCategories = categories.filter(cate => cate.id !== data.id);
      setCategories(newCategories);
      getCategories();
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //Add Cate
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await apiCateRequest.create(category);
      setProducts([
        ...categories,
        data
      ])
      getCategories();
    } catch (error) {
      console.log('failed to request API: ', error);
    }
  };

  // Edit Cate
  const onHandleEditCate = async (category) => {
    console.log(category,'app.js')
    try {
      const { data } = await apiCateRequest.update(category.id, category);
      // console.log(data, 'app.js')
      const newCategory = categories.map(cate => (
        cate.id === data.id ? data : cate
      ));
      // console.log(product.id, 'id Pro app.js')
      setProducts(newCategory);
      getCategories();
    } catch (error) {
      console.log('failed to request API: ', error);
    }
  }

  return (
    <div>
      <Routers
        listProduct={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onEdit={onHandleEdit}
        listCategory={categories} onCateRemove={onHandleRemoveCate} onAddCate={onHandleAddCate}
        onEditCate={onHandleEditCate} />
    </div>
  )

}

export default App;
