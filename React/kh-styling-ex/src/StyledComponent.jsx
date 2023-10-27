import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 4px;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    opacity: 0.4;
  }
  ${(props) =>
    props.inverted &&
    css`
      background-color: none;
      border: 4px dashed black;
      color: blueviolet;
      &:hover {
        background-color: orange;
        color: darkblue;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="gold">
      <Button inverted={true}>집에 가고 싶다</Button>
    </Box>
  );
};

export default StyledComponent;
