import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  GET_LOGOUT,
} from "../types";

const initialState = {
  login: {
    postAuth: {
      isLoading: false,
      succes: null,
      data: null,
      error: null,
    },
  },
  logout: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_START:
      return {
        ...state,
        postAuth: {
          isLoading: true,
          succes: null,
          data: [],
          error: null,
        },
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        postAuth: {
          isLoading: false,
          succes: true,
          data: action.payload,
          error: null,
        },
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        postAuth: {
          isLoading: false,
          succes: false,
          data: [],
          error: action.payload,
        },
      };
    case GET_LOGOUT:
      return {};

    default:
      return state;
  }
};
export default authReducer;
