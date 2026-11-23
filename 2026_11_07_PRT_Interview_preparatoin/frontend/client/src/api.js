import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:4320/api/books'});

export const fetchBooks = (params) => API.get(`/`, {params});
export const fetchStats = () => API.get(`/stats`);
export const createBook = (data) => API.post(`/`, data) ;
export const updateBook = (id, data) => API.put(`/${id}`, data);
export const deleteBook = (id) => API.delete(`/${id}`);


