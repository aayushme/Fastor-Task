import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
    loading: true,
  };
};

export const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data,
    status: null,
    loading: false,
  };
};

export const authFail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    status: err,
    loading: false,
  };
};

export const reduxLogin = (phone, otp) => {
  return (dispatch) => {
    var querystring = require("querystring");
    dispatch(authStart());

    var postData = querystring.stringify({
      dial_code: "+91",
      phone: phone,
      otp: otp,
    });

    let axiosConfig = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://staging.fastor.in/v1/pwa/user/login",
        postData,
        axiosConfig
      )
      .then((res) => {
        console.log(res.data.status_code);
        if (res.data.status_code === 200) {
          console.log(res);
          dispatch(
            authSuccess(res.data.data.token),
            localStorage.setItem("token", res.data.data.token)
          );
        } else {
          console.log(res);
          dispatch(authFail(res.data.error_message));
        }
      })
      .catch((err) => {});
  };
};

export const authCheckStatus = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
    } else {
      dispatch(authSuccess(token));
    }
  };
};

/*============Redux Signup===========*/

export const signupSuccess = (data) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    status:"OTP Sent, Please Login Now"
  };
};

export const signupfail = (err) => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    status:"fail",
    loading: false,
  };
};

export const reduxSignup = (phone) => {
  return (dispatch) => {
    var querystring = require("querystring");
    var postData = querystring.stringify({
      dial_code: "+91",
      phone: phone,
    });
    let axiosConfig = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios
      .post(
        "https://staging.fastor.in/v1/pwa/user/register",
        postData,
        axiosConfig
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.status_code == 200) {
          console.log(res);
          dispatch(
            signupSuccess(res.data.status)
          );
        } else {
          dispatch(signupfail(res));
        }
      })
      .catch((err) => {
        dispatch(signupfail(err));
      });
  };
};