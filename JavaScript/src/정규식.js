let cnt = 0;


function getId() {
    const id = document.querySelector("#ID").value;
    const idTest = /^\w{8,20}$/;
    let rstId = idTest.test(id);
    if (rstId === true) {
        const rstElement = document.getElementById("rstId");
        rstElement.innerText = "확인";
        rstElement.style.color = "green";
        return true;
    }
    else {
        const rstElement = document.getElementById("rstId");
        rstElement.innerText = "다시 입력하시오.";
        rstElement.style.color = "red";
        return false;
    }
}

function getPw() {
    const pw = document.querySelector("#PW").value;
    const pwTest = /^[\w!@#%&*]{8,20}$/;
    let rstPw = pwTest.test(pw);
    if (rstPw === true) {
        const rstElement = document.getElementById("rstPw");
        rstElement.innerText = "확인";
        rstElement.style.color = "green";
        return true;
    }
    else {
        const rstElement = document.getElementById("rstPw");
        rstElement.innerText = "다시 입력하시오.";
        rstElement.style.color = "red";
        return false;
    }
}

function getEmail() {
    const email = document.querySelector("#EMAIL").value;
    const emailTest = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
    const rstEmail = emailTest.test(email);
    if (rstEmail === true) {
        const rstElement = document.getElementById("rstEmail");
        rstElement.innerText = "확인";
        rstElement.style.color = "green";
        return true;
    }
    else {
        const rstElement = document.getElementById("rstEmail");
        rstElement.innerText = "다시 입력하시오.";
        rstElement.style.color = "red";
        return false;
    }
}

function getPhone() {
    const phone = document.querySelector("#PHONE").value;
    const phoneTest = /\d{2,3}-\d{3,4}-\d{4}/g;
    const rstPhone = phoneTest.test(phone);
    if (rstPhone === true) {
        const rstElement = document.getElementById("rstPhone");
        rstElement.innerText = "확인";
        rstElement.style.color = "green";
        return true;
    }
    else {
        const rstElement = document.getElementById("rstPhone");
        rstElement.innerText = "다시 입력하시오.";
        rstElement.style.color = "red";
        return false;
    }
}

function getJoin(e) {  
    switch (e) {
        case 1:
            getId();
            if (getId() === true) {
                cnt++;
            }
            break;
        case 2:
            getPw();
            if (getPw() === true) {
                cnt++;
            }
            break;
        case 3:
            getEmail();
            if (getEmail() === true) {
                cnt++;
            }
            break;
        case 4:
            getPhone();    
            if (getPhone() === true) {
                cnt++;
            }
            break;
    }     
    finalRst1 = document.getElementById("finalButton1");
    finalRst2 = document.getElementById("finalButton2");
    if (cnt === 4) {
        finalRst1.innerText = "회원가입";
    }
    else {
        finalRst2.innerText = "회원가입";
    }
}

function getRst() {
    alert("완료")
}

