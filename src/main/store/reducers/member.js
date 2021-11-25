import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  memberData: null,
  error: null,
};

const memberGetSuccess = (state, action) => {
  console.log(action.data);
  return updateObject(state, {
    memberData: action.data,
    error: null,
  });
};

const memberGetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MEMBER_GET_SUCCESS:
      return memberGetSuccess(state, action);
    case actionTypes.MEMBER_GET_FAIL:
      return memberGetFail(state, action);

    default:
      return state;
  }
};

export default reducer;
