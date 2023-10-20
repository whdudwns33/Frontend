// 정규 표현식은 문자열 검색, 대체, 추출 등을 수행, 패턴 매칭
// exec() : 패턴과 일치하는 문자열을 반환, 없으면 null
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const pattern2 = /가장큰+/;
// const result1 = pattern.exec(targetStr);
// const result2 = pattern2.exec(targetStr);

// console.log(result1);  
// console.log(result2);  


// // test() : 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검색, 있으면 true, 없으면 false
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// // const pattern2 = /가장큰+/;
// const result1 = pattern.test(targetStr);
// const result2 = pattern.test(targetStr);
// console.log(result1);  
// console.log(result2);  


let phoneNum = "안녕하세요. 제 번호는 010-5006-4146a  001-1234-5678 입니다. 전화 주세요^^";
// d{자리수}- 
const regex = /\d{3}-\d{4}-\d{4}$/g;
let rst1 = regex.test(phoneNum);
let rst2 = regex.test(phoneNum);
let rst3 = regex.test(phoneNum);
console.log(rst1);
console.log(rst2);
console.log(rst3);



