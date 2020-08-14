import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import firebase from '../../../../../firebases'

const Edit = ({ listProduct, onEdit, listCategory }) => {
    let { id } = useParams();
    const history = useHistory();
    const { register, errors, handleSubmit } = useForm();

    const product = listProduct.find(pro => pro.id.toString() === id.toString());
    // console.log(product.id.toString(), 'id')
    // console.log(product,'pro edit')

    const onHandleEdit = (data) => {
        //get image input's value
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);

        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                    id: id.toString(),
                    ...data,
                    image: url
                }
                // console.log(newData, 'data edit.js')
                onEdit(newData);
                alert('Update success!!!')
                // console.log(data, 'Edit product.js')
                history.push('/admin/products')
            })
        })
    }

    return (
        <div className="row justity-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header card-header-primary" style={{ textAlign: 'center' }}>
                        <h4 className="card-title">Edit product</h4>
                        <Link className="card-category" to="/admin/products">Back to list</Link>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onHandleEdit)}>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">ID</label>
                                        <input type="text" className="form-control" placeholder="auto" defaultValue={product.id.toString()} readOnly />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Product name</label>
                                        <input type="text" className="form-control"
                                            name="proName" placeholder="Nike 01" defaultValue={product.proName}
                                            ref={register({ required: 'True', pattern: /^[^\s]+(\s+[^\s]+)*$/, maxLength: 300 })}
                                        />
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.proName && errors.proName.type === "required" && <span>This field is required!!!</span>}
                                            {errors.proName && errors.proName.type === "maxLength" && <span>Max length 300!!!</span>}
                                            {errors.proName && errors.proName.type === "pattern" && <span>Alphabetical characters only!!!</span>}
                                        </small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="bmd-label-floating" >Category</label>
                                        <select className="form-control" name="category" ref={register()} >
                                            <option defaultValue={product.category}>{product.category}</option>
                                            {listCategory.map((categories, index) => (
                                                <option key={index} value={categories.cateName}>{categories.cateName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Price</label>
                                        <input type="number" className="form-control" name="price" defaultValue={product.price}
                                            ref={register({ required: true, min: '1', max: '5000000' })} />
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.price && errors.price.type === "required" && <span>This field is required!!!</span>}
                                            {errors.price && errors.price.type === "min" && <span>Minimun price is 1!!!</span>}
                                            {errors.price && errors.price.type === "max" && <span>Max price is 5.000.000 !!!</span>}
                                        </small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Promotion</label>
                                        <input type="number" className="form-control" name="promotion" defaultValue={product.promotion}
                                            ref={register({ required: true, min: '1', max: '5000000' })} />
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.promotion && errors.promotion.type === "required" && <span>This field is required!!!</span>}
                                            {errors.promotion && errors.promotion.type === "min" && <span>Minimun price is 1!!!</span>}
                                            {errors.promotion && errors.promotion.type === "max" && <span>Max price is 5.000.000 !!!</span>}
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Select image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="inputGroupFile02" name="image"
                                                ref={register({ required: 'True' })}
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label><br />
                                            <small id="helpId" className="text-muted text-danger">
                                                {errors.image && errors.image.type === "required" && <span>This field is required!!!</span>}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Color</label>
                                        <input type="text" className="form-control" name="color" defaultValue={product.color}
                                            ref={register({ required: true, maxLength: '100', pattern: /^[^\s]+(\s+[^\s]+)*$/ })} />
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.color && errors.color.type === "required" && <span>This field is required !!!</span>}
                                            {errors.color && errors.color.type === "maxLength" && <span>Max lenght 100 !!!</span>}
                                            {errors.color && errors.color.type === "pattern" && <span>Must be alphabetical !!!</span>}
                                        </small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Made</label>
                                        <select className="form-control" name="made" ref={register({ required: true })} >
                                            <option defaultValue={product.made}>{product.made}</option>
                                            <option value="Viet Nam">Viet Nam</option>
                                            <option value="United State">United State</option>
                                            <option value="Another">Another</option>
                                        </select>
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.made && <span>This field is required!!!</span>}
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Detail information about product</label>
                                            <textarea className="form-control" rows={5} defaultValue={product.description} name="description"

                                                ref={register({
                                                    required: true, maxLength: '10000'
                                                    // pattern: /^[^\s]+(\s+[^\s]+)*$/ 
                                                })}  />
                                            <small id="helpId" className="text-muted text-danger">
                                                {errors.description && errors.description.type === "required" && <span>This field is required!!!</span>}
                                                {errors.description && errors.description.type === "maxLength" && <span>Maxlenght 10000!!!</span>}
                                                {errors.description && errors.description.type === "pattern" && <span>Must be alphabetical!!!</span>}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary pull-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* {product.map((value, index) => ( */}
            <div className="col-md-4" >
                <div className="card card-profile">
                    <div className="card-avatar">
                        <a href="/admin/proDetails">
                            <img className="img" src={product.image} />
                        </a>
                    </div>
                    <div className="card-body">
                        <h6 className="card-category text-gray">{product.category}</h6>
                        <h4 className="card-title">{product.proName}</h4>
                        <p className="card-description">{product.description} </p>
                        <Link to="/admin/products" className="btn btn-primary btn-round">Back</Link>
                    </div>
                </div>
            </div>
            {/* ))} */}

        </div>
    )
}

Edit.propTypes = {

}

export default Edit
