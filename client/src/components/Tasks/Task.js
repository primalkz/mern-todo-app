import React, { useState } from "react";
import { useEffect } from "react";
import * as api from "../../api/index.js";

const Task = ({
  id = "",
  deleteTask,
  updateTask,
  index,
  token,
  finished = false,
}) => {
  const [editing, setEditing] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState({
    title: "",
    finished: "",
  });

  const getTask = async (token, id) => {
    const response = await api.getTask(token, id);
    setTask(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, {
      ...task,
      title: taskText,
    });
    await getTask(token, id);
    setEditing(false);
  };

  const updateFinished = async (e) => {
    e.preventDefault();
    await updateTask(id, {
      ...task,
      finished: !finished,
    });
    await getTask(token, id);
  };

  useEffect(() => {
    getTask(token, id);
  }, [token, id]);

  return (
    <>
      {editing ? (
        <>
          <div className="d-flex w-100 justify-content-between">
            <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
              <div className="d-flex">
                <input
                  className="form-control"
                  type="text"
                  value={taskText}
                  name="text"
                  onChange={(e) => {
                    setTaskText(e.target.value);
                  }}
                />
                <button type="submit" className="btn btn-primary">
                  Confirm
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setEditing(!editing)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex w-100 justify-content-between">
            {finished ? (
              <>
                <div
                  className="d-flex w-100 finished"
                  onClick={(e) => {
                    updateFinished(e);
                  }}
                >
                  <h5 className="mb-1">{index + 1}</h5>
                  <div className="ms-1">{task.title}</div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="d-flex w-100"
                  onClick={(e) => {
                    updateFinished(e);
                  }}
                >
                  <h5 className="mb-1">{index + 1}</h5>
                  <div className="ms-1">{task.title}</div>
                </div>
              </>
            )}
            <div className="d-flex">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setEditing(!editing);
                  setTaskText(task.title);
                }}
              >
                Edit
              </button>
              <button
                type="submit"
                className="btn btn-danger ms-1"
                onClick={() => deleteTask(id)}
              >
                X
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Task;
