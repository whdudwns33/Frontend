// Date 객체
//2023-10-19T00:34:31.853Z : gmt(영국) 시간으로 기준
const date = new Date();
console.log(date);


// 날짜를 직접 지정할 수는 있지만, 0~시작하기 때문에 월 일이 틀어짐. 
const date1 = new Date(2000, 9, 11);
console.log(date1);

// 정확한 날짜
const date2 = new Date("2023-01-01");
console.log(date2);

// 시간 추가
const date3 = new Date("2023/02/02/18:00:00");
console.log(date3);


const myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth() + 1); // 현재 월 출력 : 월은 나라별로 표기법이 다르기 때문에 배열로 저장되어 있고 따라서 0~시작하므로 1을 더해주어야 함
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력
console.log(myDate.toLocaleDateString()); // 지역 시간으로 설정


// set 객체 : 중복제거. 집합
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 이미 1이란 값이 저장되어 있기 때문에 추가되지 않음
mySet.size; // 3




// Math 객체 : 수학과 연산
console.log(Math.abs(-5)); // 출력: 5
console.log(Math.ceil(1.1)); // 출력: 2 - 올림
console.log(Math.floor(1.9)); // 출력: 1 - 내림
console.log(Math.round(1.4)); // 출력: 1 - 반올림
console.log(Math.max(1, 2, 3)); // 출력: 3
console.log(Math.min(1, 2, 3)); // 출력: 1
console.log(Math.pow(2, 3)); // 출력: 8 - 제곱근
console.log(Math.sqrt(9)); // 출력: 3 - 루트
console.log(Math.random()); // 출력: 0 이상 1 미만의 임의의 수

// 1 ~ 10 사이의 임의 수 생성
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random()*10 + 1));
}



