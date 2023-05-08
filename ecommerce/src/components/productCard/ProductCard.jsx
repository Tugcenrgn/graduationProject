import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { ReactComponent as HeartFill } from "../../assets/heart-fill.svg";

const ProductCard = (props) => {
  let navigate = useNavigate(props.navigate);
  const routeChange = (p) => {
    let path = p;
    navigate(path);
  };

  return (
    <div
      class="card align-items-center"
      style={{"cursor": "pointer"}}
      onClick={() => {
        routeChange(`/products/${props.id}`);
      }}>
      <img src={props.img} class="card-img-top" alt="product" />

      <div class="card-body">
        <div className="row">
          <div className="col">
            <p class="card-text">{props.info}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{props.price}</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <HeartFill style={{ height: 30, width: 30, color: "orange" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
