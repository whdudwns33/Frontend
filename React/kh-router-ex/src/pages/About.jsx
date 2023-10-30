import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = isNaN(mode) ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

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

      {/* 쿼리 스트링 */}
      <p>쿼리 스트링 : {useSearchParams.search}</p>
      <p>detail : {detail} </p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>토글 detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
