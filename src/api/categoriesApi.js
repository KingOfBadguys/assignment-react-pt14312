import http from './axiosHttp'

const getAll = () => {
    return http.get("/categories");
};

const getById = id => {
    return http.get(`/categories/${id}`);
};

const create = data => {
    return http.post('/categories', data);
};

const update = (cateID, data) => {
    return http.put(`/categories/${cateID}`, data);
};

const remove = cateID => {
    return http.delete(`/categories/${cateID}`);
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};