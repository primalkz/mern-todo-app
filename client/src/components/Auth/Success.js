import React from "react";
import "../../style.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const renderLogin = () => {
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-5">
            <form>
              <div className="text-center pt-3">
                <h1>Taskbook</h1>

                <h3>Account creation successful!</h3>
              </div>

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
