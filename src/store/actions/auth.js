import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";

import { loginApi } from "../../service/api/auth";
import {} from "../index";

const AuthStart = () => ({
  type: LOGIN_START,
});

export const AuthSucces = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const AuthFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const getAuthAction = (user, password) => {
  return async (dispatch) => {
    try {
      dispatch(AuthStart());
      const resp = await loginApi(user, password);
      const token = resp.data.token;
      localStorage.setItem("token", token);
      dispatch(AuthSucces(token));
    } catch (err) {
      console.log(err);
      dispatch(AuthFailure("The user is not registered "));
    }
  };
};
