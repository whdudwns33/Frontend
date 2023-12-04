import { useState } from "react";
import {
  Container,
  BACKGROUND,
  LoginSginup,
  Input,
  Bottom,
  Button,
  P,
  SignUpTitle,
  LoginTitle,
  SignUpButton,
  CheckInput,
} from "../component/login/LoginComponent";

const MyPage = () => {
  // 이메일 패스워드 입력
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 입력 받으면 메세지 등장, margin 제거
  const [emailMsg, setEmailMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);

  // 오류 메시지
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  // 이메일 제약 조건
  const onChangeEmail = (e) => {
    setEmailMsg(true);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setInputEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsId(false);
    } else {
      setEmailMessage("올바른 형식입니다.");
      setIsId(true);
    }
  };
  // 패스워드 제약 조건
  const onChangePw = (e) => {
    setPasswordMsg(true);

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주십시오.");
      setIsPw(false);
    } else {
      setPwMessage("유효한 비밀번호입니다.");
      setIsPw(true);
    }
  };

  return (
    <>
      <Container>
        <BACKGROUND>
          <LoginSginup>
            <div className="login">
              <div className="inline">
                <LoginTitle>Login</LoginTitle>
                <Input
                  placeholder="EMAIL"
                  onFocus={onChangeEmail}
                  onChange={onChangeEmail}
                  marginBottom={`${emailMsg ? "0" : "10%"}`}
                ></Input>
                <CheckInput>
                  <p
                    className={`${isId ? "true" : "false"}`}
                    style={{ color: `${isId ? "white" : "red"}` }}
                  >
                    {emailMessage}
                  </p>
                </CheckInput>
                <Input
                  placeholder="PASSWORD"
                  onFocus={onChangePw}
                  onChange={onChangePw}
                  marginBottom={`${passwordMsg ? "0" : "10%"}`}
                ></Input>
                <CheckInput>
                  <p
                    className={`${isPw ? "true" : "false"}`}
                    style={{ color: `${isPw ? "white" : "red"}` }}
                  >
                    {pwMessage}
                  </p>
                </CheckInput>

                <Bottom>
                  <div className="login-button">
                    <img src="" alt="카카오" />
                  </div>
                  <div className="login-button">
                    <img src="" alt="구글" />
                  </div>
                  <div className="login-button">
                    <Button width="100%" height="40%">
                      로그인
                    </Button>
                    <P>아이디 찾기</P>
                    <P>비밀번호 찾기</P>
                  </div>
                </Bottom>
              </div>
            </div>
            <div className="signup">
              <div className="inline">
                <SignUpTitle>Login</SignUpTitle>
                <P>아직 회원이 아니시라면?</P>
                <SignUpButton>
                  <p>회원 가입</p>
                  <div className="signup-img"></div>
                </SignUpButton>
              </div>
            </div>
          </LoginSginup>
        </BACKGROUND>
      </Container>
    </>
  );
};

export default MyPage;
