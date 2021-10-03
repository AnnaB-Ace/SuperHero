import {
  GET_FAILURE_NAME,
  GET_START_NAME,
  GET_SUCCESS_NAME,
  SEARCH_HEROE_ID_NAME,
  SUCCESS_HEROE_ID_NAME,
  FAILURE_HEROE_ID_NAME,
} from "../types";

const dataI = localStorage.getItem("dataId");
const teamHero = dataI ? JSON.parse(dataI) : [];

const initialState = {
  getHeroName: {
    isLoading: false,
    success: null,
    data: [],
    error: null,
  },
  getHeroId: {
    isLoading: false,
    success: null,
    data: teamHero,
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
    case SEARCH_HEROE_ID_NAME:
      return {
        ...state,
        getHeroId: {
          isLoading: true,
          success: null,
          data: [],
          error: null,
        },
      };
    case SUCCESS_HEROE_ID_NAME:
      return {
        ...state,
        getHeroId: {
          isLoading: false,
          success: true,
          data: action.payload,
          error: null,
        },
      };
    case FAILURE_HEROE_ID_NAME:
      return {
        ...state,
        getHeroId: {
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
