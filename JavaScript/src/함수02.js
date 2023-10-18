// 콜백: 함수의 인자로 다른 함수를 전달하여 그 함수가 실행 될 때 호출되는 함수
// 콜백 함수는 비동기적인 작업을 처리할 때 많이 사용
function cry () {
    console.log("cry");
}

function sing () {
    console.log("sing");
}

function dance () {
    console.log("dance");
}


// 1. 일반 함수로 호출하기
function checkMood(mood) {
    if(mood === "good") {
        sing();
    }
    else {
        cry();
    }
}
// checkMood("sad");

// 2. 콜백 함수로 호출
function checkMoodCallBack(mood, goodCall, badCall) {
    if (mood === "good") {
        goodCall();
    }
    else badCall();
}
checkMoodCallBack("good", dance, cry);


// 3. 타이머 설정과 CallBack
function buyTobe(item, price, quantity, callback) {
    console.log(item + "상품을 " + quantity + "개를 골라서 계산했습니다." )
    // setTimeout은 ( 매개변수, 시간 )으로 시간이 지난 후 어떠한 함수를 작동하게. 
    // 아래의 함수는 익명함수로 한번 쓰고 버릴것. 
    console.log("계산이 필요합니다.");
    setTimeout(function() {
        let total = price * quantity;
        callback(total);
    }, 2000);
}
function pay(n) {
    console.log("지불 금액은 " + n + "입니다.");
}
 
buyTobe("삼섬 노트북", 100, 2, pay);


// closer: 함수가 해당 함수의 스코프 외부에 있는 변수를 접근할 수 있는 메커니즘
function makeCounter() {
    let count = 100;
    return function() {
        count++;
        console.log(count);
    }
}
const counter = makeCounter(); // makeCounter를 호출하여 클로저 생성
counter();                     // 내부 함수를 호출하여 count 증가 및 결과 출력
counter();
counter();
