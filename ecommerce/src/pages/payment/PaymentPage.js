import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { savePaymentMethod } from "../../redux/Actions/CartActions";

const PaymentPage = () => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const history = useNavigate();

  if(!shippingAddress){
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
    <div className="container d-flex justify-content-center align-items-center">
      <form
        className="login2 col-md-8 col-lg-4 col-11"
        onSubmit={submitHandler}>
        <h6>SELECT PAYMENT METHOD</h6>
        <div className="payment-container">
          <div className="radio-container">
            <input type="radio" className="form-check-input" value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)} />
            <label className="form-check-label">PayPal or Credit Card</label>
          </div>
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};


export default PaymentPage;