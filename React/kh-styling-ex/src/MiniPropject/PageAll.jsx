import { useState, useReducer } from "react";
import styled, { css } from "styled-components";
// 해야할 일: 제약 조건, css 꾸밈, 컴포넌트 분할


// 목차
// 1. css 스타일
// a. 레이어 배치
// b. 세부적인 꾸밈효과
// 2. 컨트롤러


// a.
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
    justify-content: center;
    align-items: center;
  }
`;

// 좌측 레이어, 모바일은 전체
// 좌측(이미지 및 정보보여주기, 정보 출력)
const Left = styled.div`
  // PC
  @media (min-width: 450px) {
    width: 30%;
    height: 100%;
    border: 5px dashed #2E8B57;
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
    border: 3px solid red;
    border-radius: 50%;
    width: 50%;
    height: 50%;
    margin-bottom: 50px;
    background-image: url("/태연.jpg");
  }
  @media (max-width: 450px) {
    margin-top: 30px;
    margin-bottom: 30px;
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
    border: 3px solid violet;
    width: 80%;
    height: 30%;
    display: flex;
  }
`;
// 정보의 이름 레이어
const InfoName = styled.div`
  @media (min-width: 450px) {
    width: 100px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  @media (max-width: 450px) {
    margin: 0;
  }
  
`;
// 정보의 결과 레이어
const InfoResult = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed darkblue;
  }
  @media (max-width: 450px) {
    border: 3px dashed darkblue;
  }
`;

// 좌측 하단 전체 레이어
const LeftBottom = styled.div`
  @media (min-width: 450px) {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 450px) {
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
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 450px) {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
  @media (max-width: 450px) {
    position: absolute;
    width: 80%;
    min-width: 300px;
    height: 80%;
    border-radius: 5%;
    background-color: green;
    color: white;
    display: ${props => props.isVisible ? 'flex' : 'none'};
}
`;
// 우측 정보 창 등장 
// 정보 수정창
const RightInfo = styled.div`
  @media (min-width: 450px) {
    border: 3px dashed darkgoldenrod;
    width: 80%;
    height: 80%;
    animation-name: Info-animation;
    animation-duration: 0.3s;
    }
  @media (max-width: 450px) {
    display: flex;
    flex-direction:column;
    align-content: space-evenly;
    text-align: center;
    animation-name: Info-animation;
    animation-duration: 0.3s;
  }
  @keyframes Info-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

//b. 
// 꾸밈 효과
// 좌측 버튼 
const ResetButton = styled.button`
  @media (min-width: 450px) {
    margin: 0;
    padding: 0;
    border: 2px solid #2E8B57;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 0px 5px 0px 0px #006400;
    transition-duration: 0.3s;
  }
  @media (max-width: 450px) {
    margin: 0;
    padding: 0;
    border: 2px solid #2E8B57;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 0px 5px 0px 0px #006400;
    transition-duration: 0.3s;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px black;
    transform: translateY(5px);
  }
`;
// 닫기 버튼
const CloseButton = styled.button`
  @media (min-width: 450px) {
    display: none;
  }
  @media (max-width: 450px) {
    margin: 0;
    padding: 0;
    border: 2px solid #2E8B57;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 0px 5px 0px 0px #006400;
    transition-duration: 0.3s;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px black;
    transform: translateY(5px);
  }
`;
// 입력창
const InputIdBox = styled.input`
  @media (min-width: 450px) {
  margin: 0;
  padding: 0;
  background-color: none;
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 8%;
  font-size: 40px;
  }
  @media (max-width: 450px) {
  background-color: none;
  margin: 0;  
  padding: 0;
  border: none;
  border-radius: 10px;  width: 80%;
  height: 10%;
  font-size: 30px;
  }
`;
// False 제약
const RstF = styled.p`
  @media (min-width: 450px) {
    margin:0;
    padding:0;
    font-size: 20px;
    color: black;
  }
  @media (max-width: 450px) {
    margin:0;
    padding:0;
  }
`;
// True 제약
const RstT = styled.p`
  @media (min-width: 450px) {
    margin:0;
    padding:0;
    font-size: 20px;
    color: black;
  }
  @media (max-width: 450px) {
    margin:0;
    padding:0;
  }
`;

// 2. 
// a. 입력받은 정보를 객체로 저장하는 함수 reducer
const reducer = (data, action) => {
  switch (action.type) {
    case "Name":
      return { ...data, name: action.value }; // 저장하려는 정보를 해당 key에 맞게 업데이트
    case "Id":
      return { ...data, id: action.value }; 
    case "Pw":
      return { ...data, pw: action.value };
    case "Email":
      return { ...data, email: action.value };
    default:
      return data;
  }
}
// b. 입력 컨트롤러: 회원 정보 수정(아이디, 비밀번호, 회원탈퇴), 금액 충전
const ControllInfo = () => {
  // ㄱ. 버튼 클릭으로 화면 변화
  //ID 변경 제어
  const [rightIdInfo, setRightIdInfo] = useState(false);
  const onClickId = (e) => {
    setIsRightVisible(true);
    setRightIdInfo(true);
    setRightPwInfo(false);
    setRightCash(false);
    setRightMember(false);
  };
  // Pw 변경
  const [rightPwInfo, setRightPwInfo] = useState(false);
  const onClickPw = (e) => {
    setIsRightVisible(true);
    setRightPwInfo(true);
    setRightIdInfo(false);
    setRightCash(false);
    setRightMember(false);
  };
  // Cash 충전
  const [rightCash, setRightCash] = useState(false);
  const onClickCash = (e) => {
    setIsRightVisible(true);
    setRightCash(true);
    setRightIdInfo(false);
    setRightPwInfo(false);
    setRightMember(false);
  };
  // 회원 탈퇴
  const [rightMember, setRightMember] = useState(false);
  const onClickMember = (e) => {
    setIsRightVisible(true);
    setRightMember(true);
    setRightIdInfo(false);
    setRightCash(false);
    setRightPwInfo(false);
  };
  // ㄴ. 모바일 뷰어창 닫기
  const [isRightVisible, setIsRightVisible] = useState(false);
  const onClckCloseRight = () => {
    setIsRightVisible(!isRightVisible);
  };
  // ㄷ. 정보 입력. useReducer 사용해보기, reducer 함수를 만들어서 배열로 데이터 관리
  const [data, dispatch] = useReducer(reducer, {name:"", id:"", pw:"", email:""});
  // ㄹ. 제약 조건
  // 제약 조건 상태
  const [msg, setMsg] = useState("유효하지 않습니다.");
  // 제약 조건 체크
  const onChangeName = (e) => {
    const newName = e.target.value;
    if (newName.length >= 2 && !/[0-9!@#$%^&*(),.?":{}|<>]/.test(newName)) {
      dispatch({type: "Name", value: newName});
      setMsg("유효합니다.")
    }
    else {
      dispatch({ type: "Name", value: "" });
      setMsg("유효하지 않습니다.")
    }
  }
  
  return (
    <Container>
      <Left>
        <LeftTop>
          <Imagine><img src="/태연.jpg" alt="사진" /></Imagine>
          <InfoBox>
            <InfoName>
              <InfoName
              >
                회원 이름
              </InfoName>
              <InfoName
              >
                이메일
              </InfoName>
              <InfoName
              >
                전화번호
              </InfoName>
              <InfoName
              >
                소지금액
              </InfoName>
            </InfoName>
            <InfoResult>
              <p style={{ marginTop: "0" }}>결과 출력</p>
            </InfoResult>
          </InfoBox>
        </LeftTop>
        <LeftBottom>
          <LeftButton>
            <ResetButton onClick={onClickId}>아이디 변경</ResetButton>
            <ResetButton onClick={onClickPw}>비밀번호 변경</ResetButton>
            <ResetButton onClick={onClickCash}>금액충전</ResetButton>
            <ResetButton onClick={onClickMember}>회원탈퇴</ResetButton>
          </LeftButton>
        </LeftBottom>
      </Left>
      <Right isVisible={isRightVisible}>
        {rightIdInfo && (
          <RightInfo>
            <div>
              <h1>아이디 변경</h1>
              <InputIdBox
                placeholder="이름"
                type="text"
                onChange={onChangeName} 
              />
              <RstT>{msg}</RstT>
              <InputIdBox
                placeholder="ID"
                type="text"
                onChange={(e) => dispatch({ type: "Id", value: e.target.value })} 
              />     
                {data.id.length < 6 && <RstF>아이디 형식에 맞추어 입력하시오.</RstF>}
              <InputIdBox
                placeholder="PW"
                type="text"
                onChange={(e) => dispatch({ type: "Pw", value: e.target.value })} 
              /> 
                {data.pw.length < 9 &&
                !/[!@#$%^&*(),.?":{}|<>]/.test(data.pw) 
                && !/[0-9]/.test(data.pw) 
                && !/[a-z]/.test(data.pw) 
                && <RstF>비밀번호 형식에 맞추어 입력하시오.</RstF>}
                {data.pw.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(data.pw) 
                  && /[0-9]/.test(data.pw) 
                  && /[a-z]/.test(data.pw) 
                  && <RstT>유효</RstT>}

              <InputIdBox
                placeholder="EMAIL"
                type="text"
                onChange={(e) => dispatch({ type: "Email", value: e.target.value })} 
              /> 
              <CloseButton onClick={onClckCloseRight}>닫기버튼</CloseButton>
            </div>
          </RightInfo>
        )}
        {rightPwInfo && (
          <RightInfo>
            <div>
              <h1>비밀번호 변경</h1>
              <InputIdBox
                placeholder="이름"
                type="text"
                onChange={(e) => dispatch({ type: "Name", value: e.target.value })} 
              />
              <InputIdBox
                placeholder="ID"
                type="text"
                onChange={(e) => dispatch({ type: "Id", value: e.target.value })} 
              />    

              <InputIdBox
                placeholder="PW"
                type="text"
                onChange={(e) => dispatch({ type: "Pw", value: e.target.value })} 
              />  

              <InputIdBox
                placeholder="EMAIL"
                type="text"
                onChange={(e) => dispatch({ type: "Email", value: e.target.value })} 
              /> 

              <CloseButton onClick={onClckCloseRight}>닫기버튼</CloseButton></div>
          </RightInfo>
        )}
        {rightCash && (
          <RightInfo>
            <div>
              <h1>현금 충전</h1>
              충전 방식 및 충전 금액 입력창
              <CloseButton onClick={onClckCloseRight}>닫기버튼</CloseButton>
            </div>
          </RightInfo>
        )}
        {rightMember && (
          <RightInfo>
            <div>
              <h1>회원 탈퇴</h1>
              <InputIdBox
                placeholder="이름"
                type="text"
                onChange={(e) => dispatch({ type: "Name", value: e.target.value })} 
              />
              <InputIdBox
                placeholder="ID"
                type="text"
                onChange={(e) => dispatch({ type: "Id", value: e.target.value })} 
              />    

              <InputIdBox
                placeholder="PW"
                type="text"
                onChange={(e) => dispatch({ type: "Pw", value: e.target.value })} 
              />  

              <InputIdBox
                placeholder="EMAIL"
                type="text"
                onChange={(e) => dispatch({ type: "Email", value: e.target.value })} 
              /> 

              <CloseButton onClick={onClckCloseRight}>닫기버튼</CloseButton></div>
          </RightInfo>
        )}
      </Right>
    </Container>
  );
};

export default ControllInfo;
