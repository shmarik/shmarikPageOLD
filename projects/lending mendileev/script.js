const body = document.querySelector("body");
removeTodoEl();
function createLogInMenu() {
  const logIn = document.querySelector(".logIn");
  logIn.classList.add("lgn-active");
  const closeBtn = createCloseBtn(); // <span class=close>\u00D7</span>
  const div = document.querySelector(".logIn");
  div.appendChild(closeBtn);
  removeTodoEl();
}
function createCloseBtn() {
  const span = document.createElement("SPAN");
  const text = document.createTextNode("     \u00D7");
  span.className = "close";
  span.appendChild(text);

  return span;
}

function removeTodoEl() {
  const closeList = document.getElementsByClassName("close");
  const logIn = document.querySelector(".logIn");
  for (let i = 0; i < closeList.length; i++) {
    closeList[i].onclick = function () {
      logIn.classList.toggle("lgn-active");
    };
  }
}

// ? СТИЛИ ДЛЯ ПОКАЗА/СКРЫТИЯ БЛОКА igarett 15/03/2023
// ---------------------------------------------------
const content = document.querySelector("#content");
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", () => {
  content.classList.toggle("visible");
});
// ? igarett 15/03/2023
// ---------------------------------------------------
