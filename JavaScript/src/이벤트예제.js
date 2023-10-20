count = 0;
function getGreen() {
    const green = document.querySelector(".green-box");
    green.style.opacity = "1";
    green.style.zIndex = count;
    count++;
}

function getOrange() {
    const Orange = document.querySelector(".orange-box");
    Orange.style.opacity = "1";
    Orange.style.zIndex = count;
    count++;
}

function getPurple() {
    const Purple = document.querySelector(".purple-box");
    Purple.style.opacity = "1";
    Purple.style.zIndex = count;
    count++;
}

console.log(count);