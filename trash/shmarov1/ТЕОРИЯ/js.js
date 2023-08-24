// как узнать ширину окна браузера
const width = window.innerWidth
console.log(`Ширина браузера: ${width}`);

//как узнать какой бразуер
console.log(navigator.userAgent)

//узнать какая платформа ОС
console.log(navigator.platform)

//узнать на какой веб странице?
console.log(location.href)

//ДИАЛОГОВЫЕ ОКНА
alert("А ты программируешь на js?")



//? окно для подтверждения или отказа
const result = confirm("Хочешь научиться?")
console.log(result)


//? оКНО С ФОРМОЙ КОТОРОЕ ВОЗРАЩАЕТ 
const how = prompt("Кто ты по жизни?")
console.log(how)
//DOM - Document Object Model

//получить все теги с нашей страницы и схоранить в переменные 
const htmlEl = document.documentElement
console.log(htmlEl)

const headEl = document.head
console.log(headEl)

const bodyEl = document.body
console.log(bodyEl)

//Получиь детей внутри тега Body
//Это будет коллекция элементов (тегов)
const bodyChildren = bodyEl.children
console.log(bodyChildren);

//можно выборочно обращаться как к эелменатам массива 
console.log(bodyChildren[2])

const firstChild = bodyEl.firstElementChild
const lastChild = bodyEl.lastElementChild
console.log(firstChild);
console.log(lastChild);

//! как получить объект по его классу?(селектору)
const divEl = document.querySelector(".block")
console.log(divEl);

//! Как получить элемент по ID
//! Идентификатор уникальный, на странице может быть только один    

const linkEl =  document.getElementById("super-link")
console.log(linkEl)
// ! Получение элемента и изменение его содержимого
const textEl = document.querySelector('.text')
console.log(textEl.innerHTML)

// Как изменить содержимое внутри тега
// textEl.innerHTML = `Привет! Как дела?!`
textEl.innerHTML = `${textEl.innerHTML} <h2>Привет! Как дела?</h2> <br><br> <h1>JS</h1>`

// ! outerHTML в отличии от innerHTML он получает еще сам объект
console.log(textEl.outerHTML)

// ! Получить текстовое содержимое
console.log(textEl.textContent)

// ! Создание нового элемента (тега)
const newEl = document.createElement('div')
newEl.innerHTML = `Мы создали новый DIV!!!`
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

// Более круто и мощный метод для вставки элементов
mainDiv.insertAdjacentHTML(
    'beforebegin',
    newEl.innerHTML
)

// beforeend - Вставить внутри тега и в конец объекта
// afterend - Вставить элемент после объекта
// afterbegin - Вставить внутри тега и в начало
// beforebegin - Вставить элемент перед объектом

// ! Как полностью удалить элемент из верстки
// mainDiv.remove()


// ! РАБОТА СО СТИЛЯМИ (КЛАССАМИ)
const mainDivColor = document.querySelector('.main')
// ? Добавить класс в тег
mainDivColor.classList.add('active')

// ? Удалить класс из тега
mainDivColor.classList.remove('active')

// mainDivColor.classList.toggle('active')
// ? Проверить на наличие класса в теге
// console.log( mainDivColor.classList.contains('active'))




//? добавить прослушку события и удалить её
// обращение.addEventListener(событие("click"), функция, настройки{"capture":, "once":,"passive": (false or true)})
// обращение.removeEventListener(событие("click"), функция)
//? capture-фаза на которой сработаетобработчик
//? once - если значение  true то обработчик удалится после выполнения
//? passive - если true то указывает что обработчик никогда не вызывает preventDefault()

//! ОБъект события 

//? Тип события 
// event.type
// ? объект на которм сработал обработчик
// event.target
// ? Объект на который назначен  обработчик 
// event.currentTarget
// ? Положение курссора по оси х и y
// event.clientX
// event.clientY
// ? Все детали события 
// event
// ? Остановка всплытия 
// event.stopPropagation()

// ! функция рандома
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min
// }





























// const width = window.innerWidth
// console.log(`Ширина браузера ${width}`)
// console.log(navigator.userAgent)
// console.log(navigator.platform)
// console.log(location.href)
// const htmlElemm = document.documentElement
// console.log(htmlElemm)
// const bodyEl = document.body
// console.log(bodyEl)
// const bodychildren = bodyEl.children
// console.log(bodychildren)
// console.log(bodychildren[1])
// const firstChild = bodyEl.firstElementChild
// console.log(firstChild)
// const lastChild = bodyEl.lastElementChild
// console.log(lastChild)
// const divEl = document.querySelector(".block a")
// console.log(divEl)
// const linkEl = document.getElementById("supper-link")
// console.log(linkEl)