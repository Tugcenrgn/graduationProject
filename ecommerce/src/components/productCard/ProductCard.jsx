import React from "react";
import {  useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { ReactComponent as HeartFill } from "../../assets/heart-fill.svg";
import Rating from "../../components/rating/Rating";

const ProductCard = (props) => {
  let navigate = useNavigate(props.navigate);
  const routeChange = (p) => {
    let path = p;
    navigate(path);
  };

  return (
    // <div
    //   class="card align-items-center"
    //   style={{"cursor": "pointer"}}
    //   onClick={() => {
    //     routeChange(`/products/${props.id}`);
    //   }}>
    //   <img src={props.img} class="card-img-top" alt="product" />

    //   <div class="card-body">
    //     <div className="row">
    //       <div className="col">
    //         <p class="card-text">{props.info}</p>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-6">
    //         <h3>{props.price}</h3>
    //       </div>
    //       <div className="col-6 d-flex justify-content-end align-items-center">
    //         <HeartFill style={{ height: 30, width: 30, color: "orange" }} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      className="card shadow pb-0"
      style={{ cursor: "pointer" }}
      onClick={() => {
        routeChange(`/products/${props.id}`);
      }}>
      <img
        src={props.img}
        alt={props.name}
        className="card-img-top h-50 object-fit-cover  mx-auto img-thumbnail rounded"
      />
      <div className="card-body  pb-0">
        <div className="row">
          <div className="col d-flex flex-row justify-content-start">
            <h5 className="card-title">{props.name}</h5>
          </div>
          <div className="col d-flex flex-row justify-content-end">
            {props.countInStock > 0 ? (
              <h6>
                <span class="badge shadow  text-light" style={{"background-image": "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)"}}>In stock</span>
              </h6>
            ) : (
              <h6>
                <span class="badge shadow bg-secondary text-light">out of stock</span>
              </h6>
            )}
            {/* <h6>
              Stock{" "}
              <span
                class="badge shadow text-dark"
                style={{ "background-color": "orange" }}>
                {props.countInStock}
              </span>
            </h6> */}
          </div>
        </div>
        <p className="card-text">{props.description}</p>

        <div className="d-flex flex-row justify-content-between align-items-start">
          <Rating value={props.rating} />
          <p>{`${props.numReviews} reviews`}</p>
        </div>

        <div className="col-6 d-flex flex-row w-100 justify-content-between align-items-center">
          <h3>{props.price}TL</h3>
          <HeartFill style={{ height: 30, width: 30, color: "orange" }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
