import React from "react";
import loginVector from "../../assets/loginVector.png";
import "./auth.scss"

console.log(loginVector);
const Login = () => {
  return (
    <div>
      <div class="container">
        <div class="row  d-flex flex-row justify-content-evenly">
          <div className="col col-lg-6<  d-none d-md-block">
            <img className="auth-vector" src={loginVector} alt="yüklenemedi" />
          </div>
          <div className="col col-10 col-lg-4 d-flex justify-content-center align-items-center">
            <form className="login-form align-items-center">
              <h3>Disabled fieldset example</h3>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">
                  Disabled input
                </label>
                <input
                  type="text"
                  id="disabledTex tInput"
                  class="form-control"
                  placeholder="Disabled input"
                />
              </div>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">
                  Disabled input
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Disabled input"
                />
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    disabled
                  />
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
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

export default Login;
