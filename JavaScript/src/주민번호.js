const date = new Date();
const year = Number(date.getFullYear());
function getAge() {
    const idNum = document.getElementById("idNum").value;
    if (idNum.length !== 14) {
        document.write("오류")
    }
    else {
        if (idNum.indexOf("-") === true) {
            idNum = idNum.split("-");
            idNum = Number(idNum);
        }
    }
    if (Number(idNum.charAt(7)) === 1) {
        document.getElementById("gender").innerHTML = "남자";
        }
    else {
        document.getElementById("gender").innerHTML = "여자";
    }
    
    if (Number(idNum.slice(0, 1)) > 0) {
        const age = year - Number("19" + idNum.slice(0, 2));
        document.getElementById("age").innerHTML = age;
    }
    else {
        const age = year - Number("20" + idNum.slice(0, 2));
        document.getElementById("age").innerHTML = age;
    }
    
}
 
// document.write("</div>")