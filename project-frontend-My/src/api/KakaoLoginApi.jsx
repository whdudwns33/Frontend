import SignUpAxios from "../axios/SignUpAxios";
import Login_Bg from "../images/Login_Bg.png";

const KakaoLogin = () => {
  // 아래 부분은 카카오 로그인 이동을 위한 코드
  // 해당 코드는 Login Page로 이동
  // const apiKey = "a42a4db55c114cff5770a883fc8607f9";
  // const redirectUrl = "http://localhost:3000/kakao";
  // const link = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUrl}&response_type=code`;
  // const loginHandler = () => {
  //   window.location.href = link;
  // };
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  // 카카오 토큰을 발급 하는 함수
  const handleKakao = async () => {
    console.log("코드의 값 : ", code);
    try {
      const res = await SignUpAxios.kakaoLogin(code);
      if (res.status === 200) {
        console.log("카카오 로그인 : ", res);
        console.log("토큰 타입", res.data.token_type);
        window.localStorage.setItem("token_type", res.data.token_type);
        console.log("엑세스 토큰", res.data.access_token);
        window.localStorage.setItem("access_token", res.data.access_token);
        console.log("리프레쉬 토큰", res.data.refresh_token);
        window.localStorage.setItem("refresh_token", res.data.refresh_token);
      } else {
        alert("로그인 정보를 확인 하시오.");
      }
    } catch (error) {
      console.log("카카오 로그인 연결 실패 : ", error);
    }
  };

  // 카카오 유저 정보 불러오기
  const handleKakaoUser = async () => {
    try {
      const res = await SignUpAxios.kakaoUser();
      console.log("카카오 유저 데이터 :", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleKakao}>카카오 로그인</button>
      <button onClick={handleKakaoUser}>카카오 유저 정보 출력</button>
    </div>
  );
};

export default KakaoLogin;
