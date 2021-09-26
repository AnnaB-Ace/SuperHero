import { getHeroName } from "../../service/api/search";
import { GET_FAILURE_NAME, GET_START_NAME, GET_SUCCESS_NAME } from "../types";

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

export const getSearchNameAction = (name) => {
  return async (dispatch) => {
    try {
      dispatch(getNameStart());
      const resp = await getHeroName(name);
      dispatch(getNameSuccess(resp.data.results));
    } catch (err) {
      dispatch(getNameFailure(err));
    }
  };
};
