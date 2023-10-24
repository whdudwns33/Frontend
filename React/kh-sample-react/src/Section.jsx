// 컴포넌트 합성 : 여러 개의 컴포넌트를 조합하여 하나의 컴포넌트로 만드는 것
// 컴포넌트의 이름은 대문자로 why? 함수와 구분하기 위함
import IU from "./images/아이유.jpg";


function Heading(props) {
    return <h1>{props.text}</h1>
}

function Paragraph(props) {
    return <p>{props.text}</p>
}

function ImgUrl(props) {
    return <img style= {{width: "300px"}} src={IU} alt = "이미지 테스트"/>
}

const Section = (props) => {
    return(
        <div>
            <Heading text = {props.title}/>
            <Paragraph text = {props.content}/>
            <ImgUrl url = {props.url}/>
        </div>
    );
} 

export default Section;