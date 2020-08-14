import http from "./axiosHttp";

const getAll = () => {
    return http.get("/news");
};

const getById = id => {
    return http.get(`/news/${id}`);
};

const create = (data) => {
    return http.post('/news', data);
};

const update = (id, data) => {
    return http.put('/news', data);
};

const remove = id => {
    return http.delete(`/news/${id}`);
};

export default{
    getAll,
    getById,
    create,
    update,
    remove
};

