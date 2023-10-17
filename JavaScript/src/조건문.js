// // 반복문: 자바스크립트에서 반복문은 while, do-while, for, for-in, for-of
// let brands = ["애플", "구글", "페이스북", "아마존", "삼성"];
// for (let i = 0; i < brands.length; i++) {
//     console.log(brands[i]);
// }

// // 고객이 구입 가능한 음료 리스트 구하기 
// let productList = [
//     {name: "레쓰비", price : 700, },
//     {name: "티오피", price : 1000, },
//     {name: "비타500", price : 800, },
//     {name: "포카리", price : 1500,},
//     {name: "바카스", price : 900, }
// ];

// let inputCoin = 800;
// let outputList = []; // 빈배열 생성
// for (let i = 0; i < productList.length; i++) {
//     if (productList[i].price <= inputCoin) {
//         outputList.push(productList[i]);
//     }
// }
// console.log(outputList);


// // for - in : 객체의 프로퍼티를 열거하는데 사용
// let person = {
//     fname : "jon",
//     lanme : "do",
//     age : 25,
// };

// for (let key in person) {
//     console.log(key);
//     console.log(person[key])
// }


// for - of : 향상된 for문과 유사
let brands = ["애플", "구글", "페이스북", "아마존", "삼성"];
for (let e of brands) {
    console.log(e);
}



