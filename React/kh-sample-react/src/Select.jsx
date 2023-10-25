import { useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("grape");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("선택학 과일 : " + value);
    e.preventDefault(); // 기본 이벤트를 제거함
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="">
        과일을 선택하시오.
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="bananan">바나나</option>
          <option value="grape">포도</option>
          <option value="waterMelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FruitSelect;
