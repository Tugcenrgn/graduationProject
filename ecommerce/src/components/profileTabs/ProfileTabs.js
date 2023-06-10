import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../loadingError/Toast";
import Message from "../loadingError/Error";
import Loading from "../loadingError/Loading";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../redux/Actions/UserActions";
import "./ProfileTabs.scss";

const ProfileTabs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toastId = React.useRef(null);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userDetails);
  const { loading: updateLoading } = userUpdateProfile;

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    //Password match

    if (password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Passwords do not match", Toastobjects);
      }
    } else {
      dispatch(updateUserProfile({id:user._id, name, email, password}));
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Profile Updated", Toastobjects);
      }
    }
  };

  return (
    <>
      <Toast />
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      {updateLoading && <Loading />}
      <form
        className="row form-container bg-light rounded-4 align-items-center justify-content-center"
        onSubmit={submitHandler}>
        <div className="col-12 col-md-5">
          <div className="form">
            <label for="account-fn" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className=" col-12 col-md-5">
          <div className="form">
            <label htmlFor="account-email" className="form-label">
              E-mail Address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className="form">
            <label htmlFor="account-pass" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-5 ">
          <div className="form">
            <label htmlFor="account-confirm-pass" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-update">
          Update Profile
        </button>
      </form>
    </>
  );
};

export default ProfileTabs;
