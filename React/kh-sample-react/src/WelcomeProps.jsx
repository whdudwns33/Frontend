const WelcomeProp = (props) => {
    return (
    <div>
        <h1>Hello, {props.name}</h1>
        <h3>당신의 level : {props.age}</h3>
        <h3>{props.addr}으로 돌아가시오</h3>
    </div>
    )
  }

export default WelcomeProp;