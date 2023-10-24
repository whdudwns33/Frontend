import React, { useState } from "react";
const Say = () => {
  // 화면 주기를 맞춰줌
  const [message, setMessage] = useState("");
  const onclickEnter = () => setMessage("너무 졸렵습니다.");
  const onclickLeave = () => setMessage("안녕");
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
