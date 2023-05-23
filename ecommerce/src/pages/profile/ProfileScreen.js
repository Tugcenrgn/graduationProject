import React, { useEffect } from 'react'
import Header from "../../components/header/Header.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/Actions/UserActions.js';
import moment from 'moment';
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
        <div className="contanier mt-lg-5 mt-3">
            <div className="align-items-start">
                <div className="col-lg-4 p-0 shadow">
                    <div className="author-card pb-0 pb-md-3">
                        <div className="author-card-cover"></div>
                        <div className="author-card-profile-row">
                            <div className="author-card-avatar col-md-5">
                                <img src="" alt="userprofileimage" />
                            </div>
                            <div className="author-card-details col-md-7">
                                <h5 className="author-card-name mb-2">
                                    <strong>{userInfo.name}</strong>
                                </h5>
                            <span className="author-card-position">
                                <>Joined {moment(userInfo.createdAt).format('LL')}</>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="wizard pt-3">
                        <div className="d-flex align-items-start">
                            <div className="nav align-items-start flex-column col-12 nav-pills me-3"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical">
                                <button className="nav-link active"
                                id="v-pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-home"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-home"
                                aria-selected="true">
                                    Profile Settings
                                </button>
                                <button className="nav-link d-flex justify-content-between"
                                id="v-pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false">
                                    Orders List
                                    <span className="badge2">3</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ProfileTabs/>
        </div>
    )
}

export default ProfileScreen;