import React from 'react';
import './Home.css';
import loginVector from "../../assets/loginVector.png";

const Home = () => {
  return (
       <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={loginVector} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="#" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={loginVector} alt="Third slide"/>
    </div>
  </div>
</div>

  );
}


export default Home;
