import React from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import ProductCard from "../../components/productCard/ProductCard";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col col-lg-3 col-12">
          <ProductCard />
        </div>

        <div className="col col-lg-3 col-12">
          <ProductCard />
        </div>

        <div className="col col-lg-3 col-12">
          <ProductCard />
        </div>

        <div className="col col-lg-3 col-12">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
