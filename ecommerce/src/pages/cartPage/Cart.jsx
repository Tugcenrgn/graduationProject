import React, { useEffect } from "react";
import "./Cart.scss";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "../../redux/Actions/CartActions";

const Cart = ({ match }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = useParams().id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const history = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkOutHandler = () => {
    history(
    `/login?redirect=/shipping`);
    console.log("hollo")
  }

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id))
  }




  return (
    <>
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center mt-3">
            Your cart is empty.
            <Link
              className="btn mx-5 px-5 py-3 text-light "
              to="/"
              style={{
                fontSize: "12px",
                "background-image": "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)",
                "font-weight": "bold",
                "font-size": ".9em",
              }}>
              SHOP NOW
            </Link>
          </div>
        ) : (
          <>
            <div className="alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/*Cart Item*/}
            {cartItems.map((item) => (
              <div className="cart-item row d-flex flex-row pt-3 mt-2 justify-content-center">
                {/* lg delete icon */}
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  style={{ cursor: "pointer" }}
                  className=" w-100 col-1 d-flex remove-button">
                  {/* d-none d-sm-block */}
                  <i className="fas fa-times"></i>
                </div>
                <div className="row w-100 ">
                  <div className="cart-image col-md-2 col-5  d-flex  h-50 justify-content-center ">
                    <img
                      className=" img-fluid rounded"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  {/* sm delete icon
                  <div
                    onClick={() => removeFromCartHandle(item.product)}
                    style={{ cursor: "pointer" }}
                    className="d-block d-sm-none col-1 d-flex remove-button ">
                    <i className="fas fa-times"></i>
                  </div> */}
                  <div className="cart-text col-md-6 col-3 d-flex align-items-center  h-50 ">
                    <Link
                      className="text-decoration-none"
                      to={`/products/${item.product}`}>
                      <h2 className="text-dark ">{item.name}</h2>
                    </Link>
                  </div>
                  <div className="cart-price  mt-md-0 col-2 d-flex justify-content-end align-items-center   h-50 ">
                    <h4>{item.price}TL</h4>
                  </div>
                  <div className="cart-qty col-md-2 col-2 d-flex gap-3 flex-row justify-content-end align-items-center h-50">
                    <select
                      className="border-0 shadow-sm"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}

            {/*End of cart items*/}
            <div className="total mt-4 d-flex justify-content-end">
              <h2>
                <span className="badge sub">total: {total}TL</span>
              </h2>
              
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-6 text-decoration-none">
                <button className="button">Continue to shopping</button>
              </Link>

              {total > 0 && (
                <div className="col-6 d-flex  justify-content-end mt-md-0">
                  <button className="button" onClick={checkOutHandler}>
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
