// 함수 선언식
function clickEvent() {
    
}

function focusEvent() {
    const inputBox = document.querySelector("#input-box");
    inputBox.style.backgroundColor = "orange";
}

function blurEvent() {
    const inputBox = document.querySelector("#input-box");
    inputBox.style.backgroundColor = "green";
}

// 프로퍼티 리스너 방식으로 이벤트 등록
const btn = document.querySelector("button");
btn.onclick = () => alert("화살표 함수");

//이벤트 메서드로 이벤트 등록
const btnEvent = document.querySelector("#btn-event");
btnEvent.addEventListener("click", function() {
    alert("이벤트 등록 방식");
})




