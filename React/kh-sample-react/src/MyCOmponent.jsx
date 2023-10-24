// props 기본값 설정: defaultProps
const MyComponent = (props) => {
  // 구조 분해
  // const MyComponent = ({ name, age, children }) => {

  // 비구조화 할당(구조 분해) : props객체의 속성과 값을 변수에 대입
  const { name, age, children } = props;

  return (
    <div>
      안녕하시오. 나는 {name}입니다. 나이는 {age}.
      <br />
      인사말 : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
  age: 140,
};

export default MyComponent;
