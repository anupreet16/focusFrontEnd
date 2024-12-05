
import axios from 'axios';

//const API_URL = 'http://localhost:3000';
const API_URL = 'https://focusbackend-kli6.onrender.com';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUserByID = (id) => axios.get(`${API_URL}/users/${id}`);
export const createUser = (users) => axios.post(`${API_URL}/users`, users);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
