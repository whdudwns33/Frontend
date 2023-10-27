import { useState } from "react";
import styled, { css } from "styled-components";
// 목차
// 1. css 스타일
// 2. 컨트롤러

// 기본 컨테이너: 전체 레이어
const Container = styled.div`
  // PC
  @media (min-width: 450px) {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    width: 1500px;
    height: 50vw;
    flex-wrap: wrap;
    display: flex;
    min-height: 1000px;
    justify-content: space-evenly;
  }
  // 모바일
  @media (max-width: 450px) {
    box-sizing: border-box;
    width: 450px;
    height: 800px;
    display: flex;
    border: 3px solid red;
  }
`;

// 좌측 레이어, 모바일은 전체
// 좌측(이미지 및 정보보여주기, 정보 출력)
const Left = styled.div`
  // PC
  @media (min-width: 450px) {
    width: 30%;
    height: 100%;
  }
  // 모바일
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    min-height: 380px;
    border: 3px solid green;
  }
`;
// 좌측 상단 이미지 및 정보 부모 레이어, 모바일은 최상단
const LeftTop = styled.div`
  //pc
  @media (min-width: 450px) {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  // 모바일
  @media (max-width: 450px) {
    border: 3px solid black;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
// 이미지 레이어
const Imagine = styled.div`
  @media (min-width: 450px) {
    border: 3px solid blue;
    border-radius: 50%;
    width: 50%;
    height: 50%;
    background-image: url("/아이유.jpg");
  }
  @media (max-width: 450px) {
    border: 3px solid blue;
    border-radius: 50%;
    width: 50%;
    height: 50%;
  }
`;
// 정보 레이어
const InfoBox = styled.div`
  @media (min-width: 450px) {
    border: 3px solid violet;
    width: 80%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 450px) {
    width: 80%;
    height: 30%;
  }
`;
// 정보의 이름 레이어
const InfoName = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed darkblue;
  }
`;
// 정보의 결과 레이어
const InfoResult = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed darkblue;
  }
`;

// 좌측 하단 전체 레이어
const LeftBottom = styled.div`
  @media (min-width: 450px) {
    border: 3px solid red;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// 좌측 하단 버튼들의 레이어
const LeftButton = styled.div`
  @media (min-width: 450px) {
    border: 3px solid green;
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }
`;

// 우측 레이어, 모바일시 어퍼 레이어
// 우측 실제로 정보를 변경하는 레이어
const Right = styled.div`
  // PC
  @media (min-width: 450px) {
    background-color: green;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
`;
// 우측 정보 창 등장
// id
const RightIdInfo = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed darkgoldenrod;
    width: 80%;
    height: 80%;
  }
  @media (max-width: 450px) {
    box-sizing: border-box;
    width: 100%;
    min-height: 380px;
    border: 3px dashed green;
    display: flex;
    flex-direction: column;
  }
`;
// pw
const RightPwInfo = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed red;
    width: 80%;
    height: 80%;
  }
  @media (max-width: 450px) {
    box-sizing: border-box;
    width: 100%;
    min-height: 380px;
    border: 3px dashed green;
    display: flex;
    flex-direction: column;
  }
`;
// cash
const RightCash = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed darkviolet;
    width: 80%;
    height: 80%;
  }
  @media (max-width: 450px) {
    box-sizing: border-box;
    width: 100%;
    min-height: 380px;
    border: 3px dashed green;
    display: flex;
    flex-direction: column;
  }
`;
// 회원 탈퇴
const RightMemberQuit = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed black;
    width: 80%;
    height: 80%;
  }
  @media (max-width: 450px) {
    box-sizing: border-box;
    width: 100%;
    min-height: 380px;
    border: 3px dashed green;
    display: flex;
    flex-direction: column;
  }
`;

// 2. 입력 컨트롤러: 회원 정보 수정(아이디, 비밀번호, 회원탈퇴), 금액 충전
const ControllInfo = () => {
  // ㄱ. 버튼 클릭으로 화면 변화
  //ID 변경 제어
  const [rightIdInfo, setRightIdInfo] = useState(false);
  const onClickId = (e) => {
    setRightIdInfo(true);
    setRightPwInfo(false);
    setRightCash(false);
    setRightMember(false);
  };
  // Pw 변경
  const [rightPwInfo, setRightPwInfo] = useState(false);
  const onClickPw = (e) => {
    setRightPwInfo(true);
    setRightIdInfo(false);
    setRightCash(false);
    setRightMember(false);
  };
  // Cash 충전
  const [rightCash, setRightCash] = useState(false);
  const onClickCash = (e) => {
    setRightCash(true);
    setRightIdInfo(false);
    setRightPwInfo(false);
    setRightMember(false);
  };
  // 회원 탈퇴
  const [rightMember, setRightMember] = useState(false);
  const onClickMember = (e) => {
    setRightMember(true);
    setRightIdInfo(false);
    setRightCash(false);
    setRightPwInfo(false);
  };
  // ㄴ. 정보 입력
  const [memberInfo, setMemberInfo] = useState([]);
  const onChange = (e) => {
    setMemberInfo(e.target.value);
  };

  return (
    <Container>
      <Left>
        <LeftTop>
          <Imagine></Imagine>
          <InfoBox>
            <InfoName>
              <p
                style={{
                  width: "100px",
                  marginTop: "0",
                }}
              >
                회원 이름
              </p>
              <p
                style={{
                  width: "100px",
                  marginTop: "0",
                }}
              >
                이메일
              </p>
              <p
                style={{
                  width: "100px",
                  marginTop: "0",
                }}
              >
                전화번호
              </p>
              <p
                style={{
                  width: "100px",
                  marginTop: "0",
                }}
              >
                소지금액
              </p>
            </InfoName>
            <InfoResult>
              <p style={{ marginTop: "0" }}>결과 출력</p>
            </InfoResult>
          </InfoBox>
        </LeftTop>
        <LeftBottom>
          <LeftButton>
            <button onClick={onClickId}>아이디 변경</button>
            <button onClick={onClickPw}>비밀번호 변경</button>
            <button onClick={onClickCash}>금액충전</button>
            <button onClick={onClickMember}>회원탈퇴</button>
          </LeftButton>
        </LeftBottom>
      </Left>
      <div style={{ backgroundColor: "orange" }}>임시</div>
      <Right>
        {rightIdInfo && (
          <RightIdInfo>
            <div>
              <h1>아이디 변경</h1>
            </div>
          </RightIdInfo>
        )}
        {rightPwInfo && (
          <RightPwInfo>
            <div>
              <h1>비밀번호 변경</h1>
            </div>
          </RightPwInfo>
        )}
        {rightCash && (
          <RightCash>
            <div>
              <h1>현금 충전</h1>
            </div>
          </RightCash>
        )}
        {rightMember && (
          <RightMemberQuit>
            <div>
              <h1>회원 탈퇴</h1>
            </div>
          </RightMemberQuit>
        )}
      </Right>
    </Container>
  );
};

export default ControllInfo;
