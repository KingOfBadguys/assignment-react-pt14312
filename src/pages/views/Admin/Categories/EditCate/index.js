import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import firebase from '../../../../../firebases'

const EditCate = ({ onEditCate, listCategory }) => {
    let { id } = useParams();
    const history = useHistory();
    const { register, errors, handleSubmit } = useForm();
    // console.log(id,'editcate.js')

    const category = listCategory.find(cate => cate.id.toString() === id.toString());
    // console.log(category, 'cate.js')

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
                console.log(newData, 'data edit.js')
                onEditCate(newData);
                alert('Update success!!!')
                // console.log(data, 'Edit product.js')
                history.push('/admin/categories')
            })
        })
    }
    return (
        <div className="row justity-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-header card-header-primary" style={{ textAlign: 'center' }}>
                        <h4 className="card-title">Edit Category</h4>
                        <Link className="card-category" to="/admin/categories">Back to list</Link>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onHandleEdit)}>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Cate ID</label>
                                        <input type="text" className="form-control" placeholder="auto"
                                            defaultValue={category.id} readOnly />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Category name</label>
                                        <input type="text" className="form-control"
                                            name="cateName" placeholder="Nike 01" defaultValue={category.cateName}
                                            ref={register({ required: 'True', pattern: /^[^\s]+(\s+[^\s]+)*$/, maxLength: 300 })}
                                        />
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.cateName && errors.cateName.type === "required" && <span>This field is required!!!</span>}
                                            {errors.cateName && errors.cateName.type === "maxLength" && <span>Max length 300!!!</span>}
                                            {errors.cateName && errors.cateName.type === "pattern" && <span>Alphabetical characters only!!!</span>}
                                        </small>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Category Image</label>
                                        <img src={category.image} width='60px' height='60px'></img>
                                    </div>
                                </div>
                                <div className="col-md-5">
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
                            <button type="submit" className="btn btn-success pull-right">Edit</button>
                            <button type="reset" className="btn btn-primary pull-right">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
EditCate.propTypes = {

}

export default EditCate
