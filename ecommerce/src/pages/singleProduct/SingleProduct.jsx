import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  createProductReview,
  listProductDetails,
} from "../../redux/Actions/ProductActions";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import Rating from "../../components/rating/Rating";
import { createBrowserHistory } from "history";
import Cart from "../cartPage/Cart";
import moment from "moment";

import {
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
} from "../../redux/Constants/ProductConstants";

const SingleProduct = ({ match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const productId = useParams().id;
  const history = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history(`/cart/${productId}?qty=${qty}`);
    console.log("eklendi");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };

  return (
    <div className="container single-product">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          <div className="row d-flex flex-row mt-5 ">
            <div
              className="col-12 col-md-6  d-flex justify-content-center "
              style={{ "max-height": "400px" }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-75 object-fit-cover img-thumbnail rounded"
              />
            </div>
            <div className="col-12 col-md-6  d-flex justify-content-between">
              <div className="w-100 h-100 ">
                <div className="product-info mt-3 mb-3">
                  <h1 className="product-name"> {product.name}</h1>
                </div>
                <p>{product.description}</p>

                <div className="product-count col-lg-7 w-100 ">
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h4>Price</h4>
                    <h4>{product.price}TL</h4>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h4>status</h4>
                    {product.countInStock > 0 ? (
                      <h6>
                        <span
                          class="badge text-light"
                          style={{ "background-color": "orange" }}>
                          In stock
                        </span>
                      </h6>
                    ) : (
                      <h6>
                        <span class="badge text-light">out of stock</span>
                      </h6>
                    )}
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h5>{`${product.numReviews} reviews`}</h5>
                    <Rating value={product.rating} />
                  </div>
                  {product.countInStock > 0 ? (
                    <>
                      <div className="flex-box d-flex justify-content-between align-items-center ">
                        <h6>Quantitiy</h6>
                        <select
                          className="border-0 rounded-5 text-light  p-1 m-1"
                          style={{ "background-color": "#454545" }}
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={AddToCartHandle}
                        className="rounded w-100 border-0  text-light p-1 mt-4 mb-3 "
                        style={{
                          "background-image":
                            "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)",
                        }}>
                        <h4>Add to chart</h4>
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* RATING */}
          <div className="row my-5 ">
            <div className="col-12 col-md-8">
              <h5 className="mb-5 mt-1">REVIEWS</h5>
              {product.reviews.length === 0 && (
                <Message variant={"alert-info mt-3"}>No reviews</Message>
              )}

              {product.reviews.map((review) => (
                <div
                  key={review._id}
                  className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  <strong>{review.name}</strong>
                  <Rating value={review.rating} />
                  <span>{moment(review.createdAt).calendar()}</span>
                  <div className="alert alert-info mt-3">{review.comment}</div>
                </div>
              ))}
            </div>
            <div className="col-12 col-md-4">
              <h6>Write a customer review</h6>
              <div className="my-4">
                {loadingCreateReview && <Loading />}
                {errorCreateReview && (
                  <Message variant="alert-danger">{errorCreateReview}</Message>
                )}
              </div>
              {userInfo ? (
                <form onSubmit={submitHandler}>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="col-12 bg-light p-3 mt-2 border-0 rounded">
                      <option value="">...</option>
                      <option value="1" select="true">
                        1
                      </option>
                      <option value="2" select="true">
                        2
                      </option>
                      <option value="3" select="true">
                        3
                      </option>
                      <option value="4" select="true">
                        4
                      </option>
                      <option value="5" select="true">
                        5
                      </option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                      row="3"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="col-12 bg-light p-3 mt-2 border-0 rounded"></textarea>
                  </div>
                  <div className="my-3">
                    <button
                      disabled={loadingCreateReview}
                      className="col-12 bg-black border-0 p-3 rounded text-white">
                      SUBMİT
                    </button>
                  </div>
                </form>
              ) : (
                <div className="my-3">
                  <Message variant={"alert-warning"}>
                    Please{" "}
                    <Link to="/login">
                      "<strong>Login</strong>"
                    </Link>{" "}
                    to write a review{" "}
                  </Message>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
