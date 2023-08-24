// Задача 1. Напишите, функцию что преобразует «ваше-первое-сообщение» в «вашеПервоеСообщение». Вам нужно удалить все дефисы, а все слова после них должны быть заглавными.
function kebabToCamel(text) {
    let arr = text.split("-")
    let res = arr.map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1)).join("")
    console.log(res)
}
kebabToCamel("border-radius")
kebabToCamel("one-two-three")
kebabToCamel("-kebab-case")

// Задача 2. Подготовьте номер телефона в формате (12)-346578-9012

// Задача 3. Скопируйте один массив в другой.
// let arr = [1,2,3,4]
// let arrClon = arr.slice()
// console.log(arrClon);
// Задача 4. Скопируйте «Cucumber» и «Cabbage» в другой файл array.

// ! позволяет добавить измнить и удалить элементы