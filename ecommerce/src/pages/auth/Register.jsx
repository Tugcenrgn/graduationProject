import React from "react";
import registerVector from "../../assets/registerVector.png";
import "./auth.scss";

const Register = () => {
  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col col-6">
            <img className="auth-vector" src={registerVector} alt="yüklenemedi" />
          </div>
          <div className="col col-4 d-flex justify-content-center align-items-center">
            <form className="login-form align-items-center">
              <h3 className="text-center">Register</h3>
              <div className="mb-3">
                <label for="disabledTextInput" class="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="____@____.com"
                />
              </div>
              <div className="mb-3">
                <label for="disabledTextInput" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="***"
                />
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    disabled
                  />
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
