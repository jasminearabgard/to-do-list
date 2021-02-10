//get objects
let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");

//add element
btn.addEventListener("click", () => {
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

list.addEventListener("click", e => {
    if (e.target.tagName == "li") {
        e.target.classList.toggle("checked");
    }
});