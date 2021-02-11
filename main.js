//get objects
let input = document.querySelector("#");
let btn = document.querySelector("#btn");
let list = document.getElementById("list");
let el = document.getElementsByTagName("li");

//add element
btn.addEventListener("click", function() {
    let txt = input.Value;
    if (txt === "") {
        alert("you most write some thing");
    } else {
        let li = document.createElement("li");
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = "";
    }
})

//mark done subject

list.addEventListener("click", function e() {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
})