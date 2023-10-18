// // 함수 선언식 : function 키워드로 생성, 호이스팅에 영향을 받음, 호출해야 실행 됨
// // let test = 100;
// console.log(fsum(10, 20));
// function fsum(p1, p2) {
//     return p1 + p2;
// }


// // 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 x, 네이밍 함수와 익명의 함수로 만들 수 있음

// // 호이스팅이 되지 않음
// // let a = 6;
// // gugudan(a);

// const gugudan = function(a) {
//     for ( let i = 1; i < 10; i++ ) {
//         console.log(`${a} * ${i} = ${a*i}`);
//     }
// }
// let a = 6;
// gugudan(a);

// // 화살표 함수 : es6에서 추가된 새로운 함수 선언 방법, 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨
// // 1.
// const gugu = (b) => {
//     for ( let i = 1; i < 10; i++ ) {
//         console.log(`${b} * ${i} = ${b*i}`);
//     }
// }
// let b = 4;
// gugu(b);

// // 2. 매개 변수가 하나일 때는 괄호를 생략해도 됨
// const ex = (num1, num2) => {
//     return num1 * num2;
// } 
// // return 및 중괄호를 생략할 수 있음.
// // const ex = (num1, num2) => num1 * num2;
// console.log(ex(10, 2));
// // 자바스크립트는 매개변수의 수만큼 인수를 전달하지 않아도 오류가 발생하지 않음
// console.log(ex(10));


// // 3. 기본값 할당: 인수 값이 전달 되지 않으면 default 값 전달
// const ex2 = (num1, num2 = 4) => {
//     return num1 * num2;
// } 
// console.log(ex2(10));


// 4. 스코프: 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
// let c = 10;     // 전역 스코프
// function ex3() {
//     var c = 12; // 블록(지역) 스코프(변수) 선언
//     console.log(`함수 내부 : ${c}`); 
// }
// // 지역 변수를 외부에서 사용할 수 없음.
// console.log(`함수 외부 : ${c}`); 
// ex3();


// 5. var vs let 지역 변수
// var d = 10;
// {
//     var e = 20;
//     console.log(`콘솔 내부 블록 d : ${d}`);
//     console.log(`콘솔 내부 블록 e : ${e}`);
// }
// console.log(`콘솔 외부 블록 d : ${d}`);
// console.log(`콘솔 외부 블록 e : ${e}`);

// let d = 10;
// {
//     let e = 20;
//     console.log(`콘솔 내부 블록 d : ${d}`);
//     console.log(`콘솔 내부 블록 e : ${e}`);
// }
// console.log(`콘솔 외부 블록 d : ${d}`);
// console.log(`콘솔 외부 블록 e : ${e}`);



// 6. 참조 우선순위
// let f = 10;
// const e = 20;
// function ex4() {
//     let f = 50;
//     const e = 70;
//     console.log(`함수 내부 f : ${f}`);
//     console.log(`함수 내부 e : ${e}`);
// }
// ex4;


// // 7. 즉시 실행 함수: 함수를 정의하자마자 바로 실행되는 함수
// (function() {
//     init(); 
// })();

// function init() {
//     console.log("초기화 루틴을 수행합니다.");
//     let defaultUrl = "127.0.0.1";
//     let defaultPort = "3030";
//     console.log(defaultUrl, defaultPort);

//     for ( let i = 0; i < 100; i ++) {
//         console.log(i);
//     }
// }



