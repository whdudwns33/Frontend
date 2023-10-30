import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // Link to를 사용하지 않고 다른 페이지로 이동해야할 상황에서 사용하는 Hook
  const navigate = useNavigate();
  return (
    <div>
      <h1>홈페이지</h1>
      <p>집에 가고 싶다</p>
      <p>가장 먼저 보여주는 페이지</p>
      <Link to="/about">소개페이지</Link>
      <br />

      <button onClick={() => navigate("/MyPage")}>마이 페이지로 이동</button>
      <br />

      <Link to="/MyPage">내 페이지</Link>
      <br />

      <Link to="/Setting">셋팅</Link>
      <br />

      <ul>
        <li>
          <Link to="/profile/frontEnd">프론트엔드 프로필</Link>
        </li>
        <li>
          <Link to="/profile/backEnd">백엔드 프로필</Link>
        </li>
        <li>
          <Link to="/profile/dataBase">데이터베이스 프로필</Link>
        </li>

        <li>
          <Link to="/Articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
