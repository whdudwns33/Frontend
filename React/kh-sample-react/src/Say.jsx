import React, { useState } from "react";
const Say = () => {
  // 화면 렌더링 주기를 맞춰줌
  // 앞은 게터: 값을 읽는 변수, 뒤는 setter 함수로 메세지를 변화시켜주는 역할
  const [message, setMessage] = useState("");
  // 중요 포인트
  // let message ="";
  // const onclickEnter = () => message = "너무 졸렵습니다.";
  // 이게 안되는 이유
  // 렌더링이 일어나지 않기 때문에.
  const onclickEnter = () => setMessage("너무 졸렵습니다.");
  const onclickLeave = () => setMessage("집에 가고 싶습니다.");
  const [val, setColor] = useState("black");
  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickLeave}>퇴장</button>
      <h1 style={{ color: val }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록
      </button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
    </div>
  );
};

export default Say;
