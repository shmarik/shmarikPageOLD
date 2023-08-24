const textEl = document.querySelector('.text')

// ! получение  элемента и его изменение
console.log()

// !  как изменить содержимое внутри текста 
// text

// ! outerHtml  в отличие от innerHtml он получает еще и сам объект
console.log(textEl.outerHTML)

// ! получить текстовое содержимое
console.log(textEl.textContent)

// ! Создание нового тега
const newEl = document.createElement('div')
newEl.innerHTML = `Мы создали новый DIV`
console.log(newEl)

const mainDiv = document.querySelector('.main')
// ? Вставить внутри тега и в начало
// mainDiv.prepend(newEl)
// ? Вставить внутри тега и в конец объекта 
// mainDiv.append(newEl)
// ? Вставить элемент перед объектом 
// mainDiv.before(newEl)
// ? Вставить элемент после объекта 
// mainDiv.after(newEl)

// ? Более крутой и мощный способ для вставки элементов
mainDiv.insertAdjacentHTML(
    '',
    newEl.innerHTML
)

// beforeend
// afterend
// afterbegin
// beforebegin

// ! Как полностью удалить элемент из верстки
// mainDiv.remove()

// ! Работа со стилями (классами)
const mainDivColor = document.querySelector('.main')
// ? mainDivColor.classList.add('active')   добавить 
// ? mainDivColor.classList.remove('active') 
// ? mainDivColor.classList.toggle('active')
// ? mainDivColor.classList.contains('active')