import React from "react";
import "./Header.scss";
import logo from "../../assets/sp&save.png";
import cart from "../../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart);
  const { cartItems } = cartCount;
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const logoutHandler =() => {
    dispatch(logout());
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
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Link
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  About Us
                </Link>
              </li>
            </ul>
            <form class="d-flex w-50 justify-content-center form" role="search">
              <input
                class="form-control me-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
            <div class="navbar-nav m-auto mb-2 mb-lg-0">
              <span class="navbar-nav ">
                {userInfo ? (
                  <div className="btn-group dropdown">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item text-light" to="/profile">
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item text-light"
                        to="#"
                        onClick={logoutHandler}>
                        Logout
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
                        Login
                      </Link>
                      <Link className="dropdown-item text-light" to="/register">
                        Register
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
    </div>
  );
};

export default Header;
