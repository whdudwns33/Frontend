// array 객체 : 배열에서 사용할 수 있는 많은 속성과 메서드가 정의 되어 있음
const array = [1, 2, 3, 4, 5];
array.forEach(e => {    // forEach 자동 순회. 비파괴 메서드
    console.log(e*e);
});
// toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의문자열로 반환합니다
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

// join() : 배열안의 모든 문자를 지정한 문자를 이용해 연결
console.log(fruits.join(" * ")); // Banana * Orange * Apple * Mango



// pop() : 스택 자료 구조의 특성, 배열의 맨마지막 데이터를 제거하고 결과를 반환
let x = fruits.pop(); // x = "Mango"
console.log(x);


// push() : 스택 자료 구조의 특성, 배열의 맨마지막에 데이터 추가
fruits.push("kiwi");
console.log(fruits);


// shift() : 첫 번째 요소를 제거하고, 첫번째 요소를 반환
fruits.shift();
console.log(fruits.shift());
console.log(fruits);
// unshift() : 맨 앞에 요소를 추가하고 배열의 길이 반환
console.log(fruits.unshift("you"));


// concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);



// slice() : 2개의 파라미터를 활용해 배열의 요소를 잘라냄. 비파괴 메서드
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3); // [Apple, Mango]
let citrus2 = fruits.slice(1,2); // [Orange, Lemon]
console.log(fruits);
console.log(citrus);
console.log(citrus2);

// sort() , reverse()
console.log(fruits.sort());


// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열을 반환
let persons = [
    {
      name: "유재석",
      point: 78,
      city: "서울",
    },
    {
      name: "김종국",
      point: 92,
      city: "서울",
    },
    {
      name: "양세찬",
      point: 76,
      city: "제주",
    },
    {
      name: "하하",
      point: 81,
      city: "서울",
    },
  ];

let pass = persons.filter(person => person.point > 80);
console.log(pass);

let local = persons.filter(person => person.city === "제주");
console.log(local);


// map() 메서드 : 배열의 각 요소를 변환하고 결과를 새로운 배열로 반환. 리액트에서 가장 많이 사용
// 필터는 요소를 하나씩 반환하고 맵은 전체를 반환
const numbers = [1,2,3,4,5,6,7,8,9,10]; // 배열 안에는 객체가 들어갈 수 있음
const sqr = numbers.map(e => num*num);
console.log(sqr);
