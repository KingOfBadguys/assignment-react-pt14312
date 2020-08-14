import http from './axiosHttp'

const getAll = () => {
    return http.get("/news-submitted");
};

const getById = id => {
    return http.get(`/news-submitted/${id}`);
};

const create = data => {
    return http.post('/news-submitted', data);
};

const update = (id, data) => {
    return http.put(`/news-submitted/${id}`, data);
};

const remove = id => {
    return http.delete(`/news-submitted/${id}`);
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};