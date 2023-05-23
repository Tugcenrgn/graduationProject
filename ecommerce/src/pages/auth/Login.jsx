import React, { useEffect, useState } from "react";
import loginVector from "../../assets/loginVector.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import { login } from "../../redux/Actions/UserActions";
import "./auth.scss";

console.log(loginVector);

const Login = () => {
  window.scrollTo(0, 0);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log("->", redirect);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <div class="container">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading/>}

        <div class="row  d-flex flex-row justify-content-evenly">
          <div className="col col-lg-6<  d-none d-md-block">
            <img className="auth-vector" src={loginVector} alt="loading fail" />
          </div>
          <div className="col col-10 col-lg-4 d-flex justify-content-center align-items-center">
            <form
              className="login-form align-items-center"
              onSubmit={submitHandler}>
              <h3>LOGIN</h3>
              <div class="mb-3">
                <input
                  type="email"
                  id="disabledTex tInput"
                  class="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="disabledFieldsetCheck"
                  />
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                LOGIN
              </button>
              <p>
                <Link
                  className=" text-secondary"
                  to={
                    redirect ? `/register?redirect=${redirect}` : "/register"
                  }>
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
