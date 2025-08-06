import axios from 'axios';

const API_URL = '/api'; // Your backend URL

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor to add the token to every request if it exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth services
export const signup = (userData) => api.post('/auth/signup', userData);
export const login = (userData) => api.post('/auth/login', userData);

// Note services
export const getNotes = () => api.get('/notes');
export const createNote = (noteData) => api.post('/notes', noteData);
export const updateNote = (id, noteData) => api.put(`/notes/${id}`, noteData);
export const deleteNote = (id) => api.delete(`/notes/${id}`);

// AI services
export const summarizeNote = (content) => api.post('/ai/summarize', { content });

export default api;