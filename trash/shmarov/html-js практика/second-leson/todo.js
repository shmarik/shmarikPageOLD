function createTodoEl(){
    
    const input = document.getElementById("main-input")
    let inputValue = input.value
    let ul = document.querySelector(".list")
    let li = document.createElement('li')
    console.log(inputValue)
    ul.insertAdjacentHTML(
        'beforeend',
        li.outerHTML = `${inputValue}`
    )
}
console.log(inputValue);