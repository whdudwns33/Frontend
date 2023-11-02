import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인 기능
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pw: pw,
    };
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },
};

export default AxiosApi;
