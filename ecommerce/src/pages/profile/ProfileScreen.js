import React, { useEffect } from 'react'
import Header from "../../components/header/Header.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/Actions/UserActions.js';
import moment from 'moment';
import "./ProfileScreen.scss"
import profileImg from "../../assets/userProfileFemale.png";
import ProfileTabs from '../../components/profileTabs/ProfileTabs.js';

const ProfileScreen = () => {
    window.scrollTo(0,0);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
        dispatch(getUserDetails("profile"));
    },[dispatch])

    return (
      <div className="contanier d-flex flex-column mt-lg-5 ">
        <div className="d-flex align-items-center  ">
          <div className="col-lg-4 p-3 m-4 shadow user-profile-card rounded-4">
            <div className="author-card pb-0 pb-md-3 w-100 align-iitems-center d-flex flex-column justify-content-center">
              <div className="author-card-cover"></div>
              <div className="author-card-profile-row align-items-center d-flex flex-column justify-content-center">
                <div className="author-card-avatar col-md-5">
                  <img src={profileImg} alt="userprofileimage" />
                </div>
                <div className="author-card-details col-md-12 mt-2  ">
                  <h3 className="author-card-name ">
                    <strong className="mb-2">{userInfo.name}</strong>
                    <hr />
                  </h3>
                  <span className="author-card-position">
                    <>Şu tarihte katıldı <br/> {moment(userInfo.createdAt).format("LL")}</>
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard pt-3">
              <div className="d-flex flex-row align-items-center">
                <div
                  className="nav align-items-center col-12 nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical">
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true">
                    Profil Güncelleme
                  </button>
                  <button
                    className="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false">
                    Siparişler
                    <span className="badge2"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProfileTabs />
      </div>
    );
}

export default ProfileScreen;