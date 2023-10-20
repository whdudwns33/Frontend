function getAdd() {
    const value = document.getElementById("value").value;
    console.log(String(value));
    const text = document.createElement("button");
    document.body.appendChild(text);
    text.innerHTML = value;  
    text.setAttribute("onclick", "getDel()");
    text.setAttribute("class", "test1");

}

function getDel() {
    const del = document.querySelector(".test1");
    del.parentNode.removeChild(del);   
}