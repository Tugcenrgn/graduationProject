import React from "react";
import meet from "../../assets/meet.jpg";
import user1 from "../../assets/userProfileFemale.png";
import user2 from "../../assets/userProfileMale.png";

import "./Contact.scss";

const AboutUs = () => {
  return (
    <>
      <div className="row mt-4 mb-5 justify-content-center">
        <div className="col-12 col-md-5 d-flex p-5 flex-column align-items-start justify-content-center">
          <h3 className="text-muted">Tanıştığımıza Memnun Olduk</h3>
          <p className="text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            delectus architecto placeat maiores, aliquid magni. Dolorum
            doloremque quam culpa assumenda tenetur fugiat molestias harum quod
            dolores iste, itaque illum provident quibusdam nihil vel laboriosam.
            Consequatur!
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img className="w-100 rounded-4" src={meet} alt="" />
        </div>
      </div>
      <hr />
      <div className="row mt-4 pt-5">
        <div className="col-12 col-md-5 d-flex p-5 pb-0 ms-5 flex-column align-items-start justify-content-center">
          <h2 className="text-muted">Ekibimiz</h2>
        </div>
        <hr />
      </div>
      <div className="row pt-5 ps-md-5 gap-5">
        <div className="col-12 col-md-2">
          <div class="about-us-container">
            <img src={user1} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div class="about-us-container">
            <img src={user2} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div class="about-us-container">
            <img src={user2} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div class="about-us-container">
            <img src={user1} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div class="about-us-container">
            <img src={user1} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Lorem Ipsum</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
