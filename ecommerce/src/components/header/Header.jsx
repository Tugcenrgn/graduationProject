import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/spent.png";
import cart from "../../assets/shopping-cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Actions/UserActions";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  const history = useNavigate();


  const cartCount = useSelector((state) => state.cart);
  const { cartItems } = cartCount;
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const logoutHandler = () => {
    dispatch(logout());
   }

   const submitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()){
      history(`/search/${keyword}`);
    }else{
      history("/");
    }
   }

  return (
    <div className="border-bottom">
      <nav class="navbar navbar-expand-lg bg-body-tertiar">
        <div class="nav-div container-fluid ">
          <a class="navbar-brand" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  İletişim
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutUs">
                  Hakkımızda
                </Link>
              </li>
            </ul>
            <form
              onSubmit={submitHandler}
              class="d-none d-sm-flex w-50 justify-content-center form"
              role="search">
              <input
                class="form-control me-2 w-75"
                type="search"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                class="btn btn-outline-secondary h-75 mt-3 p-2 w-25"
                type="submit">
                Ara
              </button>
            </form>
            <div class="navbar-nav m-auto mb-2  mb-lg-0">
              <span class="navbar-nav mb-3 ">
                {userInfo ? (
                  <div className="btn-group dropdown ">
                    <button
                      type="button"
                      className="name-button dropdown-toggle "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Merhaba, {userInfo.name}
                    </button>
                    <div className="dropdown-menu ">
                      <Link
                        className="dropdown-item text-light "
                        to="/profile">
                        Profil
                      </Link>
                      <Link
                        className="dropdown-item text-light "
                        to="#"
                        onClick={logoutHandler}>
                        Çıkış Yap
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="btn-group dropdown">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item text-light" to="/login">
                        Giriş Yap
                      </Link>
                      <Link className="dropdown-item text-light" to="/register">
                        Üye Ol
                      </Link>
                    </div>
                  </div>
                )}
                <Link class="nav-item nav-link d-flex cart-link" to="/cart">
                  <img src={cart} class="shopping-cart" alt="cart" />
                  <p class="cart-number">{cartItems.length}</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-flex d-sm-none w-100 justify-content-center">
        <form
          onSubmit={submitHandler}
          className="d-flex d-sm-none  w-75 h-25 justify-content-center form-2"
          role="search">
          <input
            class="form-control  w-75 h-25 p-1 "
            type="search"
            aria-label="Search"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button class="btn btn-info h-25 mt-2 p-1 w-25" type="submit">
            Ara
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
