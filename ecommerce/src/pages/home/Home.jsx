import React, {useEffect, useState} from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import ProductCard from "../../components/productCard/ProductCard";
import axios from "axios";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() =>{
      const {data} = await axios.get("/api/products")
      setProducts(data)
    }

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Carousel />
        </div>
      </div>
      <div className="row pt-5">
        {products.map((product) => (
          <div className="col col-lg-3 col-12" key={product._id}>
            <ProductCard img={product.image} info={product.info} price={product.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
