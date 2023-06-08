import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '8000'}`,
});

export const requestTasks = async () => {
  const { data } = await api.get('api/tasks');
  return data;
};

export const requestCreateTask = async (body) => {
  await api.post('/api/tasks', body);
}

export const requestRemoveTask = async (id) => {
  await api.delete(`/api/tasks/${id}`);
};