import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";

const token = localStorage.getItem("token");

const initialState = {
  login: {
    isLoading: false,
    success: null,
    token: token || null,
    error: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        login: {
          isLoading: true,
          success: null,
          token: null,
          error: null,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          success: true,
          token: action.payload,
          error: null,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          success: false,
          token: null,
          error: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        login: {
          isLoading: false,
          success: false,
          token: null,
          error: null,
        },
      };

    default:
      return state;
  }
};
export default authReducer;
