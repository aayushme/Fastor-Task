import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const memberGetSuccess = (dataA) => {
  return {
    type: actionTypes.MEMBER_GET_SUCCESS,
    data: dataA,
  };
};

export const memberGetFail = (error) => {
  return {
    type: actionTypes.MEMBER_GET_FAIL,
    error: error,
  };
};

export const getMember = (token) => {
  return (dispatch) => {
    console.log(token);
    let data = {
      city_id: "118",
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization:
          "Bearer "+token,
      },
    };

    axios
      .get(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
        axiosConfig,
        data
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data);
        dispatch(memberGetSuccess(res.data));
      })
      .catch((err) => {
        dispatch(memberGetFail(err));
      });
  };
};
