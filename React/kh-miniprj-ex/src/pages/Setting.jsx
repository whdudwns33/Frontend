// 설정 페이지
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserStore";

export const Setting = () => {
  const context = useContext(UserContext);
  const { setColor } = context;

  return (
    <div>
      <ButtonContainer>
        <TransBtn>테마 설정</TransBtn>
      </ButtonContainer>

      <ButtonContainer>
        <TransBtn color="orange" onClick={() => setColor("orange")}>
          테마 설정: orange
        </TransBtn>
        <TransBtn color="green" onClick={() => setColor("green")}>
          테마 설정: green
        </TransBtn>
        <TransBtn color="black" onClick={() => setColor("black")}>
          테마 설정: black
        </TransBtn>
        <TransBtn color="darkblue" onClick={() => setColor("darkblue")}>
          테마 설정: darkblue
        </TransBtn>
      </ButtonContainer>
    </div>
  );
};
