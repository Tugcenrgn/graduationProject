import React, { useEffect } from "react";
import "./Cart.scss";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/CartActions";

const Cart = ({ match }) => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const productId = useParams().id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  
  console.log(qty);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-8 bg-danger"></div>
          <div className="col col-4 bg-primary">d</div>
        </div>
      </div>
    </>
  );
};
export default Cart;
