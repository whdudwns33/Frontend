import { useState } from "react";

function RadioButton() {
  const [selectVal, setSelectVal] = useState("apple");

  function handleChange(e) {
    setSelectVal(e.target.value);
  }
  return (
    <div>
      <label htmlFor="apple">
        사과
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="ornage">
        오랜지
        <input
          type="radio"
          name="fruits"
          id="ornage"
          value="ornage"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="banana">
        바나나
        <input
          type="radio"
          name="fruits"
          id="banana"
          value="banana"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="strawberry">
        딸기
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
      </label>
      <p>선택된 과일 : {selectVal}</p>
    </div>
  );
}

export default RadioButton;
