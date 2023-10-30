import { Link, useNavigate, Navigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = false;
  if (isLogin) {
    return (
      <div>
        <h1>내 페이지</h1>
        <Link to="/">홈페이지</Link>
        <br />
        <Link to="/about">소개페이지</Link>
        <br />

        <Link to="/Setting">셋팅</Link>
        {/* 스택 구조로 -1을 주면 이전 저장 데이터로 이동  */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default MyPage;
