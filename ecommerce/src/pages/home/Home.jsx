import React, { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../singleProduct/SingleProduct";
import { listProduct } from "../../redux/Actions/ProductActions";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel />
        </div>
      </div>
      <div className="row pt-5">
        {loading ? (
          <div className="mb-5">
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {products.map((product) => (
              <div className="col col-lg-3 col-12" key={product._id}>
                <ProductCard
                  id={product._id}
                  img={product.image}
                  info={product.info}
                  price={product.price}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
