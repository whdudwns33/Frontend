import { useState, useEffect } from "react";

const Result = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.id}</p>
    </div>
  );
};

const Study = () => {
  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const [submit, setSubmit] = useState(false);
  const onSubmit = () => {
    setData({ name, id });
    console.log(data);
    setSubmit(true);
  };

  return (
    <div>
      <input
        className="input"
        placeholder="내가 만든 아이디"
        // 이 부분은 id 태그 처럼 연결하는 부분. 필요함
        value={name}
        onChange={onChangeName}
      />
      <input
        className="input"
        placeholder="내가 만든 비번"
        // 이 부분은 id 태그 처럼 연결하는 부분. 필요함
        value={id}
        onChange={onChangeId}
      />
      <button onClick={onSubmit}>제출</button>
      {/* Result inputId={inputId} 여기서, inputId 부분은 props를 설정해주는 것 */}
      {submit && <Result data={data} />}
    </div>
  );
};

export default Study;
