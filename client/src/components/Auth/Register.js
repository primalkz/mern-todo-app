import React from "react";
import { useState } from "react";
import "../../style.css";
import { useHistory } from "react-router-dom";
import * as api from "../../api";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const renderLogin = () => {
    history.push("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .register(username, password)
      .then(() => {
        history.push("/success");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-5">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="login-form"
              autoComplete="off"
            >
              <div className="text-center pt-3 pb-3">
                <h1>Taskbook</h1>

                <h3>Create an account here!</h3>
              </div>
              <hr />

              <div className="pt-3 mb-3">
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <span className="error-message">{errorMessage}</span>
              <button
                className="btn-custom btn-lg btn-block mt-3"
                type="submit"
              >
                Sign Up
              </button>

              <div className="text-center pt-3 pb-3">
                <hr />
                <button
                  onClick={() => {
                    renderLogin();
                  }}
                  type="button"
                  className="btn btn-success btn-lg mt-3"
                >
                  Back to log in page
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
