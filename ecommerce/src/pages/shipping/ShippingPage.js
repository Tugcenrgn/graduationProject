import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/Actions/CartActions";
import addressLogo from "../../assets/address.png";
import "./ShippingPage.scss";
import "../../styles.scss";

const ShippingPage = () => {
  window.scrollTo(0, 0);
  const history = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history("/payment");
  };

  return (
    <div className="shipping-container d-flex justify-content-center align-items-center login-required">
      <div className="address-logo-div">
        <img className="address-logo" src={addressLogo} alt="address" />
      </div>
      <form
        className="Login col-md-8 col-lg-4 col-11 form-div d-flex flex-column gap-2 align-items-center"
        onSubmit={submitHandler}>
        <h4>DELİVERY ADDRESS</h4>
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter postal code"
          value={postalCode}
          required
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="btn btn-continue" type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ShippingPage;
