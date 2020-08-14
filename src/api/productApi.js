import http from './axiosHttp'

const getAll = () => {
    return http.get("/products");
};

const getById = id => {
    return http.get(`/products/${id}`);
};

const getByCategory = cate => {
    return http.get(`/products/${cate}`);
};

const create = data => {
    return http.post('/products', data);
};

const update = (id, data) => {
    return http.put(`/products/${id}`, data);
};

const remove = id => {
    return http.delete(`/products/${id}`);
};

export default {
    getAll,
    getByCategory,
    create,
    update,
    remove
};