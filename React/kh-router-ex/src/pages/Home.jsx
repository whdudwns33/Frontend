import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <p>집에 가고 싶다</p>
      <p>가장 먼저 보여주는 페이지</p>
      <Link to="/about">소개페이지</Link>
      <br />

      <Link to="/MyPage">내 페이지</Link>
      <br />

      <Link to="/Setting">셋팅</Link>
    </div>
  );
};

export default Home;
