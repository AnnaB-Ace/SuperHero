import axios from "axios";
import { API_URL_LOGIN } from "../../config";

export const loginApi = async (user, password) => {
  return await axios({
    method: "post",
    url: API_URL_LOGIN,
    data: {
      email: user,
      password: password,
    },
  });
};
