// 컴포넌트 성능을 최적화하기 위함, 이전에 계산한 값을 재사용한다.
import { useCallback, useMemo, useState, useRef } from "react";

const getAverage = (numbers) => {
  // onChange 특징 때문에 화면이 렌더링될 때 마다 함수가 불러짐. 이러한 불필요한 계산을 피하기 위해서 useMemo 사용
  console.log("평균값 구하기");
  if (numbers.length === 0) return 0;
  // 두개의 입력값을 입력 받아 하나의 결과 값으로 만들고 다음의 요소와 연산
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageInfo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEL = useRef(null);

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  // 리스트 갱신 시점
  const onInsert = useCallback(() => {
    console.log("리스트 갱신");

    if (isNaN(parseInt(number))) return 0;
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEL.current.ficus();
  }, [number, list]);

  // useMemo를 통해 콜백함수 생성
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" onChange={onChange} value={number} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default AverageInfo;
