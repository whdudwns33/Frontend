
function getId() {
    const id = document.querySelector("#ID").value;
    const idTest = /^\w{8,20}$/;
    let rst = idTest.test(id);
    id.value =  "";
    if (rst === true) {
        document.querySelector(".ok1").style.display = "flex";
        document.querySelector(".no1").style.display = "none";
    }
    else {
        document.querySelector(".no1").style.display = "flex";
        document.querySelector(".ok1").style.display = "none";
    }
}

function getPw() {
    const pw = document.querySelector("#PW").value;
    const pwTest = /^[\w!@#%&*]{8,20}$/;
    let rst1 = pwTest.test(pw);
    pw.value =  "";
    if (rst1 === true) {
        document.querySelector(".ok2").style.display = "flex";
        document.querySelector(".no2").style.display = "none";
    }
    else {
        document.querySelector(".no2").style.display = "flex";
        document.querySelector(".ok2").style.display = "none";
    }
}

function getEmail() {
    const email = document.querySelector("#EMAIL").value;
    const emailTest = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
    const rst2 = emailTest.test(email);
    email.value =  "";
    if (rst2 === true) {
        document.querySelector(".ok3").style.display = "flex";
        document.querySelector(".no3").style.display = "none";
    }
    else {
        document.querySelector(".no3").style.display = "flex";
        document.querySelector(".ok3").style.display = "none";
    }
}

function getPhone() {
    const phone = document.querySelector("#PHONE").value;
    const phoneTest = /\d{2,3}-\d{3,4}-\d{4}/g;
    const rst3 = phoneTest.test(phone);
    phone.value =  "";
    if (rst3 === true) {
        document.querySelector(".ok4").style.display = "flex";
        document.querySelector(".no4").style.display = "none";
    }
    else {
        document.querySelector(".no4").style.display = "flex";
        document.querySelector(".ok4").style.display = "none";
    }
}

function getJoin(e) {  
    switch (e) {
        case e == 1 :
            getId();
        case e == 2 :
            getPw();
        case e == 3 :
            getEmail();
        case e == 4 :
            getPhone();    
    }     
    console.log(checkList);
}



