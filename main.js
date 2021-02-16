  //get objects

  let input = document.querySelector("#todo");
  let btn = document.querySelector("#btn");
  let list = document.querySelector("#fa-ul");
  let el = document.getElementsByTagName("li");
  let trash = document.getElementsByClassName("fa-trash");

  //add element

  btn.addEventListener("click", function() {
      let txt = input.value;
      let li = document.createElement("li");
      let t = document.createTextNode(txt);
      li.appendChild(t);
      if (txt === "") {
          alert("You most write some thing.");
      } else {
          list.appendChild(li);
      }
      txt.value = "";
      let i;
      for (i = 0; i < trash.lenght; i++) {
          let trashIcon = document.createElement(trash);
          li.appendChild(trashIcon);
          trash.addEventListener("click", function() {
              list.remove("li");
          });
      }
  });
  //mark done subject

  list.addEventListener("click", e => {
      if (e.target.tagName == "LI") {
          e.target.classList.toggle("checked");
      }
  })