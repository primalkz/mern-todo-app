import axios from "axios";

// in .env: REACT_APP_API_GATEWAY_TASKS_URL="http://localhost:3001/api/tasks"
// .........REACT_APP_API_GATEWAY_AUTHENTICATION_URL="http://localhost:3001/api/user"
const API_GATEWAY_TASKS_URL =
  process.env.REACT_APP_API_GATEWAY_TASKS_URL || "http://localhost:3001";
const API_GATEWAY_AUTHENTICATION_URL =
  process.env.REACT_APP_API_GATEWAY_AUTHENTICATION_URL ||
  "http://localhost:3001";

// CREATE
export function createTask(token, newTask) {
  return axios.post(`${API_GATEWAY_TASKS_URL}/api/tasks`, newTask, {
    headers: { "auth-token": token },
  });
}

// READ ALL TASKS
export const getTasks = (token) => {
  return axios.get(`${API_GATEWAY_TASKS_URL}/api/tasks`, {
    headers: { "auth-token": token },
  });
};

// READ INDIVIDUAL TASK
export const getTask = (token, id) => {
  return axios.get(`${API_GATEWAY_TASKS_URL}/api/tasks/${id}`, {
    headers: { "auth-token": token, id: id },
  });
};

// UPDATE
export const updateTask = (token, id, updatedTask) => {
  return axios.patch(`${API_GATEWAY_TASKS_URL}/api/tasks/${id}`, updatedTask, {
    headers: { "auth-token": token },
  });
};

// DELETE
export const deleteTask = (token, id) => {
  return axios.delete(`${API_GATEWAY_TASKS_URL}/api/tasks/${id}`, {
    headers: { "auth-token": token },
  });
};

// LOGIN
export const login = (username, password) => {
  return axios.post(`${API_GATEWAY_AUTHENTICATION_URL}/api/user/login`, {
    username: username,
    password: password,
  });
};

// REGISTER NEW USER
export const register = (username, password) => {
  return axios.post(`${API_GATEWAY_AUTHENTICATION_URL}/api/user/register`, {
    username: username,
    password: password,
  });
};
