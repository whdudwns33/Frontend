// useEffect: 생명주기 메서드를 대체하는 react hook 중 하나
// 컴포넌트가 렌더링 할 때 마다 특정 동작을 수행
//  useEffect는 컴포넌트가 렌더링된 이후에 수행되며, 기본적으로 매 렌더링 마다 수행된다
// 의존성 배열에 전달된 상태가 변경될 때 마다 수행되게 함.
import { useState, useEffect } from "react";

const MemberInfo = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log(name, nickName);
    // 의존성 배열이 빈괄호면 마운트 될때만 useEffect 동작
  }, [nickName]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickName} onChange={onChangeNickName} />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickName}</p>
    </div>
  );
};

export default MemberInfo;
