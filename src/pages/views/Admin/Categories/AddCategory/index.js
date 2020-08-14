import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import firebase from '../../../../../firebases'


const AddCategory = ({ onAddCate }) => {
    const { errors, handleSubmit, register } = useForm();
    const history = useHistory();

    const onHandleAdd = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                    id: Math.random().toString(36).substr(3, 9),
                    ...data,
                    image: url
                }
                onAddCate(newData);
                alert('Add success');
                history.push('/admin/categories');
            })
        })
    }
    return (
        <div className="row justity-content-center">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-header card-header-primary" style={{ textAlign: 'center' }}>
                        <h4 className="card-title">Add Category</h4>
                        <Link className="card-category" to="/admin/categories">Back to list</Link>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onHandleAdd)}>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Cate ID</label>
                                        <input type="text" className="form-control" placeholder="auto" disabled />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Category name</label>
                                        <input type="text" className="form-control"
                                            name="cateName" placeholder="Nike 01"
                                            ref={register({ required: 'True', pattern: /^[^\s]+(\s+[^\s]+)*$/, maxLength: 300 })}
                                        />
                                        <small id="helpId" className="text-muted text-danger">
                                            {errors.cateName && errors.cateName.type === "required" && <span>This field is required!!!</span>}
                                            {errors.cateName && errors.cateName.type === "maxLength" && <span>Max length 300!!!</span>}
                                            {errors.cateName && errors.cateName.type === "pattern" && <span>Alphabetical characters only!!!</span>}
                                        </small>
                                    </div>
                                </div>
                                <div className="col-md-7">
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
                            <button type="submit" className="btn btn-primary pull-right">Create category</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

AddCategory.propTypes = {

}

export default AddCategory
