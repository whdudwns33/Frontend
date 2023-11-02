// 홈 화면
import { useNavigate } from "react-router-dom";
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import imgButton from "../images/nedbank_s.png";

const Home = () => {
  const navigate = useNavigate();
  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/memberList");
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        navigate("/Setting");
        break;
      default:
    }
  };

  return (
    <div>
      <div>
        <p>여기는 홈 화면입니다.</p>
        <ButtonContainer>
          {/* 매개변수가 전달되기 위해서는 익명의 함수 사용 */}
          <TransBtn onClick={() => onClickBtn(1)}>회원 리스트</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>뉴스 보기</TransBtn>
          <TransBtn onClick={() => onClickBtn(3)}>사진 업로드</TransBtn>
          <TransBtn onClick={() => onClickBtn(4)}>테마 변경</TransBtn>
        </ButtonContainer>
      </div>
      <div className="bdlogo">
        <img src={imgButton} alt="이미지 버튼" />
      </div>
    </div>
  );
};

export default Home;
