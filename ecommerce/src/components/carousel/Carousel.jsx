import React from "react";
import loginVector from "../../assets/loginVector.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";
import  "./Carousel.scss";

const Carousel = () => {
    return (
      <div id="carouselExample" class="carousel slide carousel-container  ">
        <div className="carousel-inner carousel-div">
          <div class="carousel-item active">
            <img src={banner1} className="d-block w-100  h-75" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner2} className="d-block w-100 h-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 h-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100 h-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Carousel;