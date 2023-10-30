import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div>
      <h1>셋팅 페이지</h1>
      <Link to="/">홈페이지</Link>
      <br />

      <Link to="/about">소개페이지</Link>
      <br />

      <Link to="/MyPage">내 페이지</Link>
    </div>
  );
};

export default Setting;
