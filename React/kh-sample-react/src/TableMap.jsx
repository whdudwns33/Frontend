import { useState, useEffect } from "react";
const TableMap = () => {
  const data = [
    { ID: 100, Name: "집", age: 20 },
    { ID: 101, Name: "아파트", age: 21 },
    { ID: 102, Name: "빌라", age: 22 },
    { ID: 103, Name: "주택", age: 23 },
  ];
  const [mapData, setMapData] = useState("");
  useEffect(() => {
    setMapData(data);
    // useEffect는 화면 렌더링 이후 실행
    // 빈배열은 화면이 렌더링 되면 useEffect가 실행
    // 만약 일정한 변수(매개변수)가 존재하면 해당 변수가 실행될 때 useEffect 실행
  }, []);

  const tableClickEvent = (item) => {
    console.log(item);
  };

  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>age</th>
      </thead>
      <tbody>
        {/* 조건부 렌더링 */}
        {mapData &&
          mapData.map((item) => (
            // 매개 변수가 있으면 익명의 함수를 넣고 매개변수가 없으면 그냥 함수를 넣어도 됨
            <tr key={item.ID} onClick={() => tableClickEvent(item)}>
              <td>{item.ID}</td>
              <td>{item.Name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableMap;
