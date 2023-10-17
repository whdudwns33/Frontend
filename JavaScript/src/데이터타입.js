// 문자열
// let string = "문자열" + " 연결 연산자 사용";
// console.log(string);

// // 문자열 안에 문자열  
// // let name = "느그 이름은 '집에가고 싶다' 입니다.";
// // console.log(name);



// // 템플릿 문자열: ``(백 틱)을 사용해서 만들며, es6에서 추가 됨
// let name = "전사";
// let age = 200;
// let addr = "페리온";
// console.log(`저의 이름은 ${name}, 레벨은 ${age}, 주소는 ${addr}입니다.`);


// 숫자형
// Number: 자바 스크립트는 정수와 실수를 구분하지 않고 숫자형으로 취급
// let num1 = 10;
// // typeof() : 데이터 타입 확인
// console.log(typeof(num1));

// 부동 소수점은 근사치 계산을 하기 때문에 정확한 정수값이 나오지 않음
// let sum = 0.1 + 0.2;
// console.log(sum);

// // 논리형 : 참과 거짓 구분
// let age = 20;
// let isAdult = (age > 18) ? true : false;
// if (isAdult) {
//     console.log("성인입니다.");
// }
// else {
//     console.log("청소년입니다.");
// }




// undefined 와 null은 특수 자료형이라고 부른다.
// undefined : 변수는 선언되었지만 아직 값이 정해지지 않았음을 의미
// let empty;
// console.log(empty);

// // null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워둘 때 사용
// let empty = null;
// console.log(empty)


// 객체(object)
// 자바 스크립트의 핵심 자료형
// 기본 자료형을 제외하고 자바 스크립트의 대부분의 자료구조는 객체로 이루어 짐
// 객체 자료형은 배열, 객체 리터럴, 함수 등이 있음
// 1. 배열 : 복수의 데이터를 정의할 수 있는 자료형
let score = [80,90,100];
console.log(score);
// 자바 스크립트의 배열은 자바와 다르게 모든 자료형을 저장할 수 있다.
let arr = ["첫번쨰", 21, true, [100,80,90]];
console.log(arr);
// 2. 객체 리터럴 : 객체를 정의하는 가장 간단한 방법이며, 자바스크립트에서 가장 많이 사용되는 문법
// 객체 리터럴은 key와 value 한쌍으로 구성 (== 딕셔너리, 맵), 중괄호를 이용해서 생성
score = {
    kor: 80,
    eng: 90,
    mat: 90,
};
console.log(score);
console.log(score.kor);
console.log(score['eng']);

const person = {
    name: "마법사",
    age: 22,
    addr: "엘레니아",
    info: function() {
        return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr}`;
    }
}
console.log(person.info());
console.log(person);


 

