// onChange 이벤트 핸들링
import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("안녕하세요");
  // e : 이벤트를 의미 onChange 등등
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" placeholder="이름을 입력하시오" onChange={changeMsg} />
      <h2>입력 받은 메세지 : {message}</h2>
    </div>
  );
};

export default EventPractice;
