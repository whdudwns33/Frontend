import { useState } from "react";

const Table = () => {
  const data = [
    { ID: 1, NAME: "임릉", AGE: 25 },
    { ID: 2, NAME: "고래", AGE: 125 },
    { ID: 3, NAME: "시위", AGE: 35 },
    { ID: 4, NAME: "전쟁", AGE: 2335 },
  ];
  const handleTableRowCLick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          // 온클릭에 익명의 함수를 넣는 이유?
          <tr key={item.id} onClick={() => handleTableRowCLick(item)}>
            <td>{item.ID}</td>
            <td>{item.NAME}</td>
            <td>{item.AGE}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
