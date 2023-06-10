import React, { useEffect, useState } from "react";
import registerVector from "../../assets/registerVector.png";
import "./auth.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/Actions/UserActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";

const Register = () => {
  window.scrollTo(0, 0);
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log("->", redirect);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name,email, password));
  };

  return (
    <div>
      <div className="container">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <div className="row d-flex flex-row justify-content-center">
          <div className="col col-12 col-lg-4  d-flex justify-content-center align-items-center">
            <form
              className="login-form align-items-center"
              onSubmit={submitHandler}>
              <h3 className="text-center">Üye Ol</h3>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Kullanıcı Adı"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <input
                    type="email"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <input
                    type="password"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <input
                    type="password"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Şifre Onay"
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
              <p>
                <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                  Zaten hesabım var
                  <br />
                  <strong> Giriş yap</strong>
                </Link>
              </p>
            </form>
          </div>
          <div className="col col-6 d-none d-md-block">
            <img
              className="auth-vector"
              src={registerVector}
              alt="yüklenemedi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
