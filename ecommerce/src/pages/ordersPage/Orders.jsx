import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Orders.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../../redux/Actions/OrderActions";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import moment from "moment";

const  Orders = ({ match }) => {
  window.scrollTo(0, 0);
  const orderId = useParams().id;
  // const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);


  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
    // order.isPaid = true;
  };

  return (
    <>
      <div className="container">
        {console.log("helu")}
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
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
                    <p>{order.user.name}</p>
                    <p>
                      <a href={`mailTo:${order.user.email}`}>
                        {order.user.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-truck-moving"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Order Info</strong>
                    </h5>
                    <p>Shipping:{order.shippingAddress.country}</p>
                    <p>Pay Method:{order.paymentMethod}</p>

                    {order.isPaid ? (
                      <div className="bg-info p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Paid on {moment(order.paidAt).calendar()}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Not Paid
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Deliver To</strong>
                    </h5>
                    <p>
                      Address:
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.address},{" "}
                      {order.shippingAddress.postalCode},{" "}
                    </p>
                    {order.isDelivered ? (
                      <div className="bg-danger p-1 col-12">
                        <p className="text-white text-center text-sm-start">
                          Delivered on {moment(order.deliveredAt).calendar()}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-1 col-12">
                        <p className="text-white text-center text-sm-start">
                          Not Delivered
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row order-products justify-content-between">
              <div className="col-lg-8">
                {order.orderItems.length === 0 ? (
                  <Message variant="alert-info mt-5">
                    Your order is empty
                  </Message>
                ) : (
                  <>
                    {order.orderItems.map((item, index) => {
                      return (
                        <div
                          className="order-product row rounded-3"
                          key={index}>
                          <div className="col-md-3 col-6  product-items">
                            <img
                              className="w-50 "
                              src={item.image}
                              alt={item.name}
                            />
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
                      );
                    })}
                  </>
                )}
              </div>

              <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Products</strong>
                      </td>
                      <td>{order.itemsPrice}TL</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Shipping</strong>
                      </td>
                      <td>{order.shippingPrice}TL</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>TOTAL</strong>
                      </td>
                      <td>{order.totalPrice}TL</td>
                    </tr>
                  </tbody>
                </table>
                <button className="col-12" type="btn" onClick={successPaymentHandler}>PayPalButton</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Orders;
