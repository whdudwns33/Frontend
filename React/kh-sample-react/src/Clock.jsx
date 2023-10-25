// useState()를 사용하여 시간 업데이트하기
// useState()는 값이 변화할 때 화면 렌더링
// react라는 라이브러리에서 useState를 불러오기
import { useEffect, useState } from "react";

// component : 화면의 동작과 화면을 그려주는 요소가 모두 포함
const Clock = () => {
  // date는 실제 화면에 나타나는 값, setDate는 값을 변경시켜 주는 함수, 값이 변경되면 자동 렌더링
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // 화살표 함수 이자 익명의 함수
    const tick = () => {
      setDate(new Date());
    };
    const intervalId = setInterval(tick, 1000);

    // 컴포넌트가 언마운트 되는 시점: 화면 전환 등이 되는 시점.
    return () => {
      // 1초마다 위 콜백함수가 반복되는데, 아래 clear를 만나면 초기화가 된다.
      // 즉, 1개만 유지
      clearInterval(intervalId);
    };
  }, []); // [] 의존성 배열 : 배열이 비어 있으면 화면이 마운트되는 시점을 의미. 매개변수같은 개념

  // 콜백 함수를 사용 : 정지 조건이 없기 때문에 무한히 실행

  return (
    <div>
      <h1>현재 시간</h1>
      <div style={{ color: "gold", fontSize: "80px" }}>
        {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Clock;
