import { getHeroID, getHeroName } from "../../service/api/search";
import {
  GET_FAILURE_NAME,
  GET_START_NAME,
  GET_SUCCESS_NAME,
  SEARCH_HEROE_ID_NAME,
  SUCCESS_HEROE_ID_NAME,
  FAILURE_HEROE_ID_NAME,
} from "../types";

const getNameStart = () => ({
  type: GET_START_NAME,
});

const getNameSuccess = (data) => ({
  type: GET_SUCCESS_NAME,
  payload: data,
});

export const getNameFailure = (error) => ({
  type: GET_FAILURE_NAME,
  payload: error,
});
const getNameStartID = () => ({
  type: SEARCH_HEROE_ID_NAME,
});

const getNameSuccessID = (data) => ({
  type: SUCCESS_HEROE_ID_NAME,
  payload: data,
});

export const getNameFailureID = (error) => ({
  type: FAILURE_HEROE_ID_NAME,
  payload: error,
});

export const getSearchNameAction = (name) => {
  return async (dispatch) => {
    try {
      dispatch(getNameStart());
      const resp = await getHeroName(name);
      if (resp.data.response === "success") {
        dispatch(getNameSuccess(resp.data.results));
      } else {
        console.log("no se encontro");
      }
    } catch (err) {
      dispatch(getNameFailure(err));
    }
  };
};
export const getSearchIDAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getNameStartID());
      const resp = await getHeroID(id);
      if (resp.data.response === "success") {
        dispatch(getNameSuccessID(resp.data));
      } else {
        console.log("no se encontro");
      }
    } catch (err) {
      dispatch(getNameFailure(err));
    }
  };
};
