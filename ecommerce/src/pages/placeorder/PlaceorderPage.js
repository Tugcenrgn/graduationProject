import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/loadingError/Error";
import { Link } from "react-router-dom";

const PlaceorderPage = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const placeorderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row order-detail">
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-4 center">
              <div className="alert-success order-box">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="col-md-8 center">
              <h5>
                <strong>Customer</strong>
              </h5>
              <p>{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-4 center">
              <div className="alert-success order-box">
                <i className="fa fa-truck-moving"></i>
              </div>
            </div>
            <div className="col-md-8 center">
              <h5>
                <strong>Orfer Info</strong>
              </h5>
              <p>Shipping: {cart.shippingAddress.country}</p>
              <p>Payment method: {cart.paymentMethod}</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-4 center">
              <div className="alert-success order-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="col-md-8 center">
              <h5>
                <strong>Deliver to</strong>
              </h5>
              <p>
                Address:{cart.shippingAddress.city}, ,{" "}
                {cart.shippingAddress.address}, ,{" "}
                {cart.shippingAddress.postalCode}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row order-products justify-content-between">
        <div className="col-lg-8">
          {cart.cartItems.length === 0 ? (
            <Message variant="alert-info mt-5">Your cart is empty</Message>
          ) : (
            <>
              {cart.cartItems.map((item, index) => (
                <div className="order-product row" key={index}>
                  <div className="col-md-3 col-6">
                    <img className="w-50" src={item.image} alt={item.name} />
                  </div>
                  <div classNasme="col-md-5 col-6 d-flex align-items-center">
                    <Link to={`/products/${item.product}`}>
                      <h6>{item.name}</h6>
                    </Link>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center">
                    <h4>QUANTITY</h4>
                    <h6>{item.qty}</h6>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center">
                    <h4>SUBTOTAL</h4>
                    <h6>{item.qty * item.price}TL</h6>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* total */}
        <div className="col-lg-3 d-flex align-items-end flex-column mt-5">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Products</strong>
                </td>
                <td>{cart.itemsPrice}TL</td>
              </tr>
              <tr>
                <td>
                  <strong>Shipping</strong>
                </td>
                <td>{cart.shippingPrice}TL</td>
              </tr>
              <tr>
                <td>
                  <strong>TOTAL</strong>
                </td>
                <td>{cart.totalPrice}TL</td>
              </tr>
            </tbody>
          </table>
          {cart.cartItems.length === 0 ? null : (
            <button type="submit" onClick={placeorderHandler}>
              PLACE ORDER
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceorderPage;
