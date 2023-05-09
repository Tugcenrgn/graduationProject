import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProductDetails } from "../../redux/Actions/ProductActions";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import Rating from "../../components/rating/Rating";
import { createBrowserHistory } from "history";

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = useParams().id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const AddToCartHandle = (e) =>{
    const history = createBrowserHistory();
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`)
    console.log("eklendi")
  }

  return (
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-50"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name"> {product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>{product.price}TL</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>status</h6>
                      {product.countInStock > 0 ? (
                        <span>In stock</span>
                      ) : (
                        <span>out of stock</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating value={product.rating} text = {`${product.numReviews} reviews`}/>
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantitiy</h6>
                          <select>
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button onClick={AddToCartHandle} className="round-black-btn">
                          Add to chart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* RATING */}
            <div className="row my-5 ">
              <div className="col-md-6">
                <h6 className="mb-3">REVIEWS</h6>
                <Message variant={"alert-info mt-3"}>No reviews</Message>
                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  <strong>Admin Doe</strong>
                  {/* <Rating /> */}
                  <span>Jan 12 2022</span>
                  <div className="alert alert-info mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, cumque? Sapiente officiis explicabo odio deleniti
                    corrupti aperiam, nulla possimus. Ad!
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h6>Write a customer review</h6>
                <div className="my-4"></div>

                <form>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                      <option value=""Select>Select...</option>
                      <option value="1"Select>1</option>
                      <option value="2"Select>2</option>
                      <option value="3"Select>3</option>
                      <option value="4"Select>4</option>
                      <option value="5"Select>5</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                    row="3"
                    className="col-12 bg-light p-3 mt-2 border-0 rounded">
                    </textarea>
                  </div>
                  <div className="my-3">
                    <button className="col-12 bg-black border-0 p-3 rounded text-white">
                      SUBMİT
                    </button>
                  </div>
                </form>
                <div className="my-3">
                  <Message variant={"alert-warning"}>
                    Please{" "}
                    <Link to="/login">
                      "<strong>Login</strong>"
                    </Link> {" "}
                    to write a review{" "}
                  </Message>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    
  );
};

export default SingleProduct;
