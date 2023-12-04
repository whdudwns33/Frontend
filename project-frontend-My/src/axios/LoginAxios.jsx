import axios from "axios";
import Common from "../utils/common";

const LoginAxios = {
  memberLogin: async (email, password) => {
    const login = {
      email: email,
      password: password,
    };
    return await axios.post(Common.KH_DOMAIN + "/auth/login", login);
  },
};

export default LoginAxios;
