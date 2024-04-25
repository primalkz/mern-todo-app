import React from "react";
import { useEffect, useState } from "react";
import * as api from "../../api";
import "../../style.css";
import Task from "./Task";

const Tasks = ({ token, username }) => {
  const [taskText, setTaskText] = useState("");
  const [tasksData, setTasksData] = useState([{ title: "" }]);

  const createTask = async () => {
    await api.createTask(token, { title: taskText });
    getTasks();
  };

  const getTasks = async () => {
    const response = await api.getTasks(token);
    setTasksData(response.data);
  };

  const updateTask = async (id, newTask) => {
    await api.updateTask(token, id, newTask);
    getTasks();
  };

  const deleteTask = async (id) => {
    await api.deleteTask(token, id);
    getTasks();
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
    setTaskText("");
  };

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container tasks-container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="tasks-heading col-md-5">
            <h3>Welcome to your tasks, {username}</h3>
            <button className="btn btn-success" onClick={logout}>
              Logout
            </button>
          </div>

          <div className="col-md-5 tasks-app">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              autoComplete="off"
            >
              <h4 className="mb-5 text-center">
                Click on a task to cross it out
              </h4>
              <div className="form-group task-form">
                <input
                  className="form-control"
                  type="text"
                  value={taskText}
                  name="text"
                  onChange={(e) => {
                    setTaskText(e.target.value);
                  }}
                  placeholder="Title"
                />

                <button className="btn btn-primary" type="submit">
                  <span>+</span>
                </button>
              </div>
            </form>
            <hr />
            <ul className="todo-list list-group">
              {tasksData.map((task, key) => (
                <li className="todo-list-item list-group-item" key={key}>
                  <Task
                    id={task._id}
                    finished={task.finished}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    index={key}
                    token={token}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
