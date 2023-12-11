import axios from "axios";
import Common from "../utils/Common";

// 로그인, 회원가입 axios 모음
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

  // 카카오 토큰 발급
  kakaoLogin: async (code) => {
    return await axios.get(Common.KH_DOMAIN + `/auth/kakao?code=${code}`);
  },

  // 카카오 사용자 정보 가져오기
  kakaoUser: async () => {
    const accessToken = window.localStorage.getItem("access_token");
    return await axios.get("https://kapi.kakao.com/v2/user/me	", {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  // 닉네임 중복 체크
  memberNickname: async (nickname) => {
    return await axios.get(
      Common.KH_DOMAIN + `/auth/nickName?nickName=${nickname}`
    );
  },

  // 전화번호 인증번호 받기
  memberTel: async (tel) => {
    return await axios.get(Common.KH_DOMAIN + `/sms/send-mms?tel=${tel}`);
  },

  // 인증번호 확인
  memberTelAuth: async (cnum) => {
    return await axios.get(Common.KH_DOMAIN + `/sms/check?cnum=${cnum}`);
  },
};

export default SignUpAxios;
