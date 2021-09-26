import { GET_FAILURE_NAME, GET_START_NAME, GET_SUCCESS_NAME } from "../types";

const initialState = {
  getHeroName: {
    isLoading: false,
    success: null,
    data: [],
    error: null,
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_START_NAME:
      return {
        ...state,
        getHeroName: {
          isLoading: true,
          success: null,
          data: [],
          error: null,
        },
      };
    case GET_SUCCESS_NAME:
      return {
        ...state,
        getHeroName: {
          isLoading: false,
          success: true,
          data: action.payload,
          error: null,
        },
      };
    case GET_FAILURE_NAME:
      return {
        ...state,
        getHeroName: {
          isLoading: false,
          success: false,
          data: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
