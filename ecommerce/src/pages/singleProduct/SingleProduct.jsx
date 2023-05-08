import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../redux/Actions/ProductActions";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";


const SingleProduct = ({match}) => {
    const dispatch = useDispatch();
    const productId = useParams().id;
    
    const productDetails = useSelector((state) => state.productDetails)
    const {loading, error, product} = productDetails;


    useEffect(() => {
        dispatch(listProductDetails(productId))
    }, [dispatch, productId]);

    return (
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <div className="row">
            <div className="col-md-6">
              <div className="single-image">
                <img src={product.image} alt={product.name} className="w-50"/>
              </div>
            </div>
           
          </div>
        )}
      </div>
    );
}

export default SingleProduct;