import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  status: null,
  loading: false,
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    status: action.status,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    status: action.status,
    token: null,
    loading: false,
  });
};

const signupSuccess = (state, action) => {
  return updateObject(state, {
    status: action.status,
    loading: false,
  });
};

const signupFail = (state, action) => {
  return updateObject(state, {
    status: action.status,
    token: null,
    loading: false,
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
    default:
      return state;
  }
};

export default reducer;
