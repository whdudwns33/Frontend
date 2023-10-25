import { useState } from "react";

const EvevtHandler = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onCLick = () => {
    alert(userName + " : " + message);
    // 초기화
    setUserName("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") onCLick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="이름"
        value={userName}
        onChange={onChangeUserName}
      />

      <input
        type="text"
        placeholder="메세지"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onCLick}>확인</button>
    </div>
  );
};

export default EvevtHandler;
