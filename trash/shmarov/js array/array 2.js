let arr = [
    "mama","papa","ya",
]

// метод splice - позволяет добавить, удалить и заменить элементы

// 1)удаление так же может как pop вернуть удаленное значение
arr.splice(1, 1)
console.log(arr);

//2)Замена
arr.splice(0, 1, "papa")
console.log(arr);

//3) Добавление
arr.splice(0, 0, "mama") // второй аргумент всегда ноль
console.log(arr);

// slice создает клон части массива которую выберешь или весь массив
// ! чтобы склонировать массив полностью нужно ничего не писать в аргументы
let arr2 = arr.slice(0, 2)// 1 аргумент с какого элемента начать 2 арг до кого не включая его
console.log(arr2);

// ? также если первый агумент сделать отрицательным числом то отсчет элементов массива будет проходить с конца массива

// ! поиск в массиве

// метод indexOf - возврощаетиндекс по значению 
console.log(arr.indexOf("mama"));
console.log(arr.indexOf("yaf")); // если метод не находит значение то возврощает -1

// метод includes проверяет есть ли такой элемент в массиве возврощает folse или true
console.log(arr.includes("papa"));

// метод find - поиск в массиве объектов с определенным условием
let arrObj = [
    {name: "mama", age: 36},
    {name: "papa", age: 38},
    {name: "ya", age: 14},
]
// let result = arrObj.find(function (item, index, array){
//    return item.age === 36
//}
let result = arrObj.find(item => item.age == 36)
console.log(result);