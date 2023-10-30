import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>소개 페이지</h1>
      <p>역시 집이 좋겠죠</p>
      <p>두번째 페이지</p>
      <Link to="/">홈페이지</Link>
      <br />

      <Link to="/MyPage">내 페이지</Link>
      <br />

      <Link to="/Setting">셋팅</Link>
    </div>
  );
};

export default About;
