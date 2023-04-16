import React from "react";
import registerVector from "../../assets/registerVector.png";
import "./auth.scss";

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex flex-row justify-content-evenly">
          <div className="col col-6">
            <img
              className="auth-vector"
              src={registerVector}
              alt="yüklenemedi"
            />
          </div>
          <div className="col col-4 d-flex justify-content-center align-items-center">
            <form className="login-form align-items-center">
              <h3 className="text-center">Register</h3>
              <div className="row">
                <div className="col col-6">
                  <div className="mb-3">
                 
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col col-6">
                  <div className="mb-3">
                    
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                 
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
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
                    I accept the Terms of Use & Privacy Policy
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
