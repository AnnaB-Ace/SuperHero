import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  GET_LOGOUT,
} from "../types";

import { loginApi } from "../../service/api/auth";
import {} from "../index";

const postAuthStart = () => ({
  type: POST_LOGIN_START,
});

export const postAuthSucces = (data) => ({
  type: POST_LOGIN_SUCCESS,
  payload: data,
});

const getAuthFailure = (error) => ({
  type: POST_LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: GET_LOGOUT,
});

export const getAuthAction = (user, password) => {
  return async (dispatch) => {
    try {
      dispatch(postAuthStart());
      const resp = await loginApi(user, password);
      const token = resp.data.token;
      localStorage.setItem("token", token);
      dispatch(postAuthSucces(token));
    } catch (err) {
      dispatch(getAuthFailure(err));
    }
  };
};
