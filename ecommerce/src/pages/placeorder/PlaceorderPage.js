import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/loadingError/Error";
import { createOrder } from "../../redux/Actions/OrderActions";
import { Link, useNavigate } from "react-router-dom";
import { ORDER_CREATE_RESET } from "../../redux/Constants/OrderConstants";
import "./PlaceorderPage.scss";

const PlaceorderPage = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useNavigate();

  //Calculate price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 250 ? 0 : 50);
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      console.log("if success");
      history(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [history, dispatch, success, order]);

  const placeorderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );

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
                <strong>Order Info</strong>
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
        <div className="col-lg-8 products">
          {cart.cartItems.length === 0 ? (
            <Message variant="alert-info mt-5">Your cart is empty</Message>
          ) : (
            <>
              {cart.cartItems.map((item, index) => (
                <div className="order-product row rounded-3" key={index}>
                  <div className="col-md-3 col-6  product-items">
                    <img className="w-50 " src={item.image} alt={item.name} />
                  </div>
                  <div className="col-md-3 col-6  product-items">
                    <Link
                      className="product-name"
                      to={`/products/${item.product}`}>
                      <h3>{item.name}</h3>
                    </Link>
                  </div>
                  <div className="mt-3 mt-md-0 col-md-3 col-6 product-items ">
                    <h6>QUANTITY</h6>
                    <h4>{item.qty}</h4>
                  </div>
                  <div className="badge mt-3 mt-md-0 col-md-3 col-6 product-items  d-flex justify-content-center align-center">
                    <h6>SUBTOTAL</h6>
                    <h4>{item.qty * item.price}TL</h4>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* total */}
        <div className="total-table col-lg-3 d-flex align-items-end flex-column ">
          <table className="table">
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
            <button
              className="button"
              type="submit"
              onClick={placeorderHandler}>
              PLACE ORDER
            </button>
          )}

          {error && (
            <div className="my-3 col-12">
              <Message variant="alert-danger">{error}</Message>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceorderPage;
