import axios from "../../service/axios";
import { PATHS } from "../constants";

export const loginApi = async (user, password) => {
  return await axios({
    method: "post",
    url: `${PATHS.login}`,
    data: {
      email: user,
      password: password,
    },
  });
};
