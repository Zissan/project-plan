import actions from "../actions/actionTypes";
const initialState = {
  authError: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCES:
      return {
        ...state,
        authError: null
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        authError: "Login failed."
      };
    case actions.SIGNOUT_SUCCESS:
      return state;
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case actions.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
