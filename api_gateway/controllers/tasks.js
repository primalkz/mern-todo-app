express = require("express");
mongoose = require("mongoose");
const axios = require("axios");

const TASKS_API_URL = process.env.TASKS_API_URL || "http://localhost:5000";

// CREATE
const createTask = async (req, res) => {
  const id = req.user._id;
  const title = req.body.title;

  const data = {
    author: id,
    title: title,
  };

  await axios.post(`${TASKS_API_URL}/tasks`, data).then((response) => {
    res.status(200).json(response.data);
  });
};

// READ ALL
const getTasks = async (req, res) => {
  const id = req.user._id;
  await axios.get(`${TASKS_API_URL}/tasks/users/${id}`).then((response) => {
    res.json(response.data);
  });
};

// READ SINGLE
const getTask = async (req, res) => {
  await axios
    .get(`${TASKS_API_URL}/tasks/${req.params.id}`)
    .then((response) => {
      res.json(response.data);
    });
};

// UPDATE TITLE
const updateTask = async (req, res) => {
  await axios
    .put(`${TASKS_API_URL}/tasks/${req.params.id}`, req.body)
    .then((response) => {
      res.json(response.data);
    });
};

// DELETE
const deleteTask = async (req, res) => {
  await axios
    .delete(`${TASKS_API_URL}/tasks/${req.params.id}`)
    .then((response) => {
      res.json(response.data);
    });
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
