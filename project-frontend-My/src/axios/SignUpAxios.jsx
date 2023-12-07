import axios from "axios";
import Common from "../utils/Common";

const SignUpAxios = {
  // 회원가입
  signup: async (email, password, NickName, name, addr, tel, gender, age) => {
    const member = {
      email: email,
      password: password,
      nickName: NickName,
      name: name,
      addr: addr,
      tel: tel,
      gender: gender,
      age: age,
    };
    return await axios.post(Common.KH_DOMAIN + "/auth/sign", member);
  },

  // 이메일 인증
  memberEmail: async (email) => {
    return await axios.post(
      Common.KH_DOMAIN + `/auth/mailConfirm?email=${email}`
    );
  },

  // 이메일 인증 번호 체크
  // email 속성 필수
  memberEpw: async (epw) => {
    return await axios.get(Common.KH_DOMAIN + `/auth/ePw?epw=${epw}`);
  },

  // 로그인
  memberLogin: async (email, password) => {
    const login = {
      email: email,
      password: password,
    };
    return await axios.post(Common.KH_DOMAIN + "/auth/login", login);
  },

  // 닉네임 중복 체크
  memberNickname: async (nickname) => {
    return await axios.get(
      Common.KH_DOMAIN + `/auth/nickName?nickName=${nickname}`
    );
  },

  // 전화번호 인증
  memberTel: async (tel) => {
    return await axios.get(Common.KH_DOMAIN + `/sms/send-mms?tel=${tel}`);
  },
};

export default SignUpAxios;
