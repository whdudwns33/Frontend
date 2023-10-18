// 표준 내장 객체: 자바 스크립트에서 개발의 편의를 위해 미리 만들어 놓은 것
// 문자열을 다루는 String 객체
// length : 메서드가 아닌 속성으로 존재한다. 문자열의 길이를 반환한다.
const pw = "1234";
if (pw.length < 6) {
    console.log("길이는 최소 6자입니다.");
    console.log(`입력받은 길이는 ${pw.length}`);
} else {
    console.log("다음");
}


// 특정 문자열 포함 여부 확인(true, false)
const email = "test!naver.com";
if (email.includes("@") === false) {
    console.log("1다시 입력하시오.")
}

// 대상 문자열과 일치하는 첫 번째 문자의 인덱스를 반환. 인덱스는 0부터 시작하기 때문에 부정 표시를 -1로 한 것.
const email2 = "test!naver.com";
if (email.indexOf("@") === -1) {
    console.log("2다시 입력하시오.")
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 마지막에 발견되는 문자열의 index 반환
const email3 = "test!nav!e!!.com";
if (email3.lastIndexOf("!") !== -1) {
    console.log(email3.lastIndexOf("!"));
}


// slice() : 시작 위치와 종료 위치가 주어지면, 문자열에서 해당 부분을 잘라내어 반환
const str = "Apple, Banana, Kiwi";
const rst = str.slice(7,13);
console.log(rst);
const newRst = str.replace("Kiwi", "Orange");
console.log(newRst);


// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수이며, 기존의 문자열을 변경하지 않음
const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" " + text2);
console.log(text3);


// 표준 내장 객체
// Number 객체: 숫자와 관련된 작업을 할 때 사용하는 메서드
// Number.parseFloat() 메서드
console.log(Number.parseFloat("12"));         // 12
console.log(Number.parseFloat("12.34"));      // 12.34
console.log(Number.parseFloat("12문자열"));   // 12
console.log(Number.parseFloat("12 34 56"));   // 12
console.log(Number.parseFloat("문자열 56")); // NaN

// Number.parseInt()
console.log(Number.parseInt("12"));         // 12
console.log(Number.parseInt("12.34"));      // 12
console.log(Number.parseInt("12문자열"));   // 12
console.log(Number.parseInt("12 34 56"));   // 12
console.log(Number.parseInt("문자열 56"));  // NaN
