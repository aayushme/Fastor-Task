import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  status: null,
  authloading: false,
  signuploading:false
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, authloading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    status: action.status,
    authloading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    status: action.status,
    token: null,
    authloading: false,
  });
};

const signupStart = (state, action) => {
  return updateObject(state, { error: null, signuploading: true });
};

const signupSuccess = (state, action) => {
  return updateObject(state, {
    status: action.status,
    signuploading: false,
  });
};

const signupFail = (state, action) => {
  return updateObject(state, {
    status: action.status,
    token: null,
    signuploading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL:
      return signupFail(state, action);
    case actionTypes.SIGNUP_START:
      return signupStart(state, action);
    default:
      return state;
  }
};

export default reducer;
