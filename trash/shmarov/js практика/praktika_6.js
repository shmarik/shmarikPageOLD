// ! Задача 1
// Дан объект с видеокартами (ключи это названия, значения это цены)
// Напишите код для суммирования всей стоимости и сохраните результат в переменной sum

// НАЧАЛО
// Пишите код ниже здесь
let sum = 0
let videocard = {
    rtx4090: 150000,
    rtx4080: 110000,
    rtx3080: 90000
}
for(let prop in videocard ){
    sum = sum + videocard[prop]
}
console.log(sum)
//let sum = videocard.rtx4090 + videocard.rtx3080 + videocard.rtx4080
//console.log(sum)
// КОНЕЦ


// ! Задача 2
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
// Создайте пустой объект user.
// Добавьте свойство name со своим значением .
// Добавьте свойство surname со своим значением.
// Измените значение свойства name на JavaScript.
// Удалите свойство name из объекта.

// НАЧАЛО
// Пишите код ниже здесь
let user = {
    name:"lalala",
    surname:"surlalala",
}
let m = user.name = "lololo"
delete user.name


// КОНЕЦ
