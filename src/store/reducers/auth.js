import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  GET_LOGOUT,
} from "../types";

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
    case POST_LOGIN_START:
      return {
        ...state,
        login: {
          isLoading: true,
          success: null,
          token: null,
          error: null,
        },
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          success: true,
          token: action.payload,
          error: null,
        },
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          success: false,
          data: null,
          error: action.payload,
        },
      };
    case GET_LOGOUT:
      return {
        ...state,
        login: {
          isLoading: false,
          success: false,
          data: null,
          error: null,
        },
      };

    default:
      return state;
  }
};
export default authReducer;
