import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../redux/Actions/CartActions";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import "./PaymentPage.scss";

const PaymentPage = () => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const history = useNavigate();

  if (!shippingAddress) {
    history("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history("/placeorder");
  };

  return (
    <div className="payment-container container d-flex justify-content-center align-items-center">
      <form
        className="payment-form-div login2 col-md-8 col-lg-4 col-11"
        onSubmit={submitHandler}>
        <h5>ÖDEME YÖNTEMİ SEÇİNİZ</h5>
        <div className="payment-container">
          <div className="radio-container">
            <input
              type="radio"
              className="form-check-input"
              value={'visa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">Visa</label>
            <img src={visa} alt="" />
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="form-check-input"
              value={'mastercard'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">MasterCard</label>
            <img src={mastercard} alt="" />
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="form-check-input"
              value={'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">PayPal</label>
            <img src={paypal} alt="" />
          </div>
        </div>

        <button className="btn btn-continue" type="submit">
          DEVAM
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
