import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <h1>내 페이지</h1>
      <Link to="/">홈페이지</Link>
      <br />
      <Link to="/about">소개페이지</Link>
      <br />

      <Link to="/Setting">셋팅</Link>
    </div>
  );
};

export default MyPage;
