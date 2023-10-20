const finalDay = new Date("2024-02-22");
const date = new Date();

const remain = Number(finalDay.getTime()) - Number(date.getTime());
console.log(remain);

const remainTime = parseInt(remain/(24*60*60*1000));
console.log(remainTime);

document.getElementById("value").innerHTML = remainTime + "일";
