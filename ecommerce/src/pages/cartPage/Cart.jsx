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
    history("/login?redirect=shipping");
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
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{ fontSize: "12px" }}>
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
              <div className="cart-item row">
                <div
                onClick={() => removeFromCartHandle(item.product)}
                style={{cursor: 'pointer'}}
                className="remove-button d-flex justify-content-center align-items-center">
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3 ">
                  <img className="h-50" src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center ">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex">
                  <h6>Quantitiy</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }>
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end">
                  <h6>Price</h6>
                  <h4>{item.price}TL</h4>
                </div>
              </div>
            ))}

            {/*End of cart items*/}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">{total}TL</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6">
                <button>Continue to shopping</button>
              </Link>

              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>
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
