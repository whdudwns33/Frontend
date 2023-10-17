let isRed = false;
const head = document.querySelector("#head-line");
head.onclick = function() {
    // if 조건문이 쓰인 !isRed는 isRed가 false냐라고 묻는 조건문이다.
    if (!isRed) {            
    head.style.color = "red";
    // console 로그는 system.print.out 과 동일
    // 하지만 이 경우에는 onclick 이벤트가 없어서 결과가 보이지 않음
    // 따라서 브라우저의 디버깅창에서 확인해야함
    console.log("현재 color는 red입니다.")
    } else {
        head.style.color = "blue";
        console.log("현재 color는 blue.")
    }
    isRed = !isRed;
}