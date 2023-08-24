// ? Для чего нужны переменные
// [+] Для хранения и обращения к данным в памяти по имени
// [+] Для удобства
// [] Можно и обойтись
// ? Для чего нужны условные конструкции
// [] Чтобы менять порядок выполнения программы
// [] Чтобы выбрать разные варианты
// [] Можно и обойтись
// ? Где хранятся данные во время выполнения программы
// [] Центральный процессор
// [] Жесткий диск
// [+] Оперативная память
// ? Для чего нужна интерполяция строк?
// [] Для упрощения текста
// [+] Чтобы вычислить значения переменных прямо в строке
// [] Интер ... что вообще ??
// ? Для чего нужны циклы
// [+] Чтобы выполнять код столько раз, пока уловие цикла не выполнится
// [] Чтобы выбрать несколько вариантов
// [] Чтобы усложнить жизнь программисту

// ! Ваши ранги и уровни задач
// ? JS Ученик
// ? JS Подмастерье
// ? JS Адепт
// ? JS Младший Магистр
// ? JS Магистр
// ? JS Старший магистр
// ? JS Архимаг

// ? if - else
// ! Задача 1 - Уровень "JS Ученик"
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// "Число положительное", если значение больше нуля,
// "Число отрицательное", если значение меньше нуля,
// "Это ноль", если значение равно нулю.

// Предполагается, что пользователь вводит только числа.
// ! И конечно же данную задачу нужно запустить через браузер Google Chrome.
// ! Вспомни как правильно подключать скрипт в html и запускать на выполнение

// НАЧАЛО
// Пишите код ниже здесь
//let value = prompt("введите число")
//if(value <0){
//    alert("число отрицательное")
//}
//else(value > 0)
//{
//    alert("число положительное")
//}

// КОНЕЦ


// ? && || !
// ! Задача 2 - Уровень "JS Подмастерье"
// В переменной time лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// * Используется шаблоны для строк (интерполяцию)
// * Операнды в логическом выражении обязательно должны быть в скобках
// if ( (операнд1 сравнить с операнд2) && (операнд1 сравнить с операнд2) )

// НАЧАЛО
// Пишите код ниже здесь
//let time = prompt()
//if( (time >= 1) && (time <= 15 )){
//    alert("первая четверть часа")
//}
//else if((time > 15) && (time <= 30 ))
//{
//    alert("vtoraya chetvert")
//}
//if((time > 30) && (time <= 45 ))
//{
 //   alert("tretya")
//}
//else if((time > 45) && (time < 60 )){
//    alert("chetvertaya")
//}
// КОНЕЦ


// ? SWITCH
// ! Задача 3 - Уровень "JS Подмастерье"
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// НАЧАЛО
// Пишите код ниже здесь
let month =prompt("введите номер месяца")
switch
    case 12:
    case 1:
    case 2:
)
// КОНЕЦ


// ? Циклы
// ! Задача 4 - Уровень "JS Подмастерье"
// С помощью цикла for напишите в консоль только нечетные числа из диапазона от 1 до 50

// НАЧАЛО
// Пишите код ниже здесь
//for(let h = 0; h < 50; h++){
//    if( h % 2 !== 0){
//        console.log(h)
//}        
//}
// КОНЕЦ

// ! Задача 5 - Уровень "JS Подмастерье"
// Дано число n=1000. Делите его на 2 столько раз, ПОКА результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// НАЧАЛО
// Пишите код ниже здесь
//let n = 10000
//let iteracii = 0
//while(n > 50){
//    console.log(n)
//    n /= 2
//    iteracii++
//}
//    console.log("кол-во итераций " + iteracii)
// КОНЕЦ


// ! Задача 6* - Уровень "JS Адепт"
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// Нужно самостоятельно найти изучить про метод строки toInt() и применить
// Нужно использовать шаблоны для строк (интерполяцию)
// Использовать конструкцию if else, которая возвращает значение в переменную

// * Справка. Подсказка
// Если разделить число на 
// 10 то получим его разряд десятков (123 / 10 = 12)
// 100 то получим его разряд сотен (123 / 100 = 1)
// и т.д.
// Если взять остаток от деления 
// на 10 мы получим последний символ числа (123 % 10 = 3)
// на 100 мы получим последние два числа (123 % 100 = 23)
// и т.д.
// * Math.trunc(value) получить целую часть числа, откинуть дробную
// ! Если перед строкой поставить знак +, то она станет числом :))
// ! Например +"123" станет обычным числом 123

// * Результат должен быть такой
// Входная строка `123321`
// `Да: 6 = 6`
// Входная строка `111222`
// `Нет: 3 != 6`

// НАЧАЛО
// Пишите код ниже здесь
//let str = prompt();
//let n = +str;
//let polovi1 =(Math.trunc(n / 100000) + Math.trunc((n / 10000) % 10) + Math.trunc((n / 1000) % 10));
//let polovi2 =(Math.trunc((n % 1000) / 100) + Math.trunc((n % 100) / 10) + (n % 10));
//    if(polovi1 == polovi2){
//        console.log(`${polovi1} = ${polovi2}`);
//        alert("да");
//}
//    else(polovi1 !== polovi2)
//{
//    console.log(`${polovi1} != ${polovi2}`)
//    alert("нет")
//}
// КОНЕЦ
