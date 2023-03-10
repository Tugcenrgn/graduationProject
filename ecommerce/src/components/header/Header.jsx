import React from "react";
import "./Header.scss";
import logo from "../../assets/sp&save.png";
import cart from "../../assets/shopping-cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="nav-div container-fluid ">
        <a class="navbar-brand" href="#">
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
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
              <Link class="nav-item nav-link" to="/Admin">
                Admin
              </Link>
              <Link class="nav-item nav-link" to="/Login">
                Login
              </Link>
              <Link class="nav-item nav-link" to="/Register">
                Register
              </Link>
              <Link class="nav-item nav-link d-flex" to="/Cart">
                  <img src={cart} class="shopping-cart" alt="cart" />
                  <p>0</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
