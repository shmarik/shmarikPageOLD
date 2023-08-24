const ul = document.querySelector(".list")

checkedTodoEl()
addCloseBtnToList()
removeTodoEl()

function createTodoElement() {
    const li = document.createElement("li") // <li></li>
    const input = document.getElementById("main-input")
    const inputValue = input.value

    const text = document.createTextNode(inputValue)
    li.appendChild(text)
    
    if (inputValue.trim() === "") {
        alert("Напишите хоть что-то 😢")
    } else {
        ul.appendChild(li)
        input.value = ""
    }

    const closeBtn = createCloseBtn() // <span class=close>\u00D7</span>
    
    li.appendChild(closeBtn) // <li> <span class=close>\u00D7</span> </li>

    removeTodoEl()

}

function checkedTodoEl() {
    ul.addEventListener(
        "click",
        function (ev) {
            if (ev.target.tagName === "LI") {
                console.log(ev.target.tagName);
                ev.target.classList.toggle("checked")
            }
        },
        false
    )
}

function createCloseBtn() {
    const span = document.createElement("SPAN")
    const text = document.createTextNode("     \u00D7")
    span.className = "close"
    span.appendChild(text)

    return span
}

function addCloseBtnToList() {
    const myList = document.getElementsByTagName("LI")

    for (let i = 0; i < myList.length; i++) {
        myList[i].appendChild(createCloseBtn())
    }
}

function removeTodoEl() {
    const closeList = document.getElementsByClassName("close")

    for (let i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function () {
            this.parentElement.remove()
        }
    }
}