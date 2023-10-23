const memberInfo = [
    {
        name: "마법사",
        age: 22,
        job: "연예인",
        addr: "엘레니아"
    },
    {
        name: "전사",
        age: 32,
        job: "무력담당",
        addr: "페리온"
    },
    {
        name: "메카닉",
        age: 25,
        job: "기계공",
        addr: "길거리"
    },
];

// 자바 스크립트 객체를 제이슨 문자열로 변환
// 제이슨으로 바꾸는 이유는 백엔드로 날리기 위해서. 
// key 자리가 모두 문자열로 인식
// 직렬화
const json = JSON.stringify(memberInfo);
console.log(json);

// 제이슨 문자열(포맷)을 자바스크립트 객체로 변환
const jsObject = JSON.parse(json);
console.log(jsObject);