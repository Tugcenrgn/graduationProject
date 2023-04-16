import React from "react";
import "./ProductCard.scss";
import urun1 from "../../assets/urun1.png";
import { ReactComponent as HeartFill } from "../../assets/heart-fill.svg";

const ProductCard = () => {
  return (
    <div class="card align-items-center">
      <img src={urun1} class="card-img-top" alt="product" />
      <div class="card-body">
        <div className="row">
          <div className="col">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>price</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <HeartFill
              style={{ height: 30, width: 30,  color:"orange" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
