function getRandom() {
    const num = Number(document.getElementById("num").value);
    console.log(num);
    const rst = Math.floor(Math.random() * num + 1);
    console.log(rst);
    document.getElementById("result").innerHTML = rst;
}