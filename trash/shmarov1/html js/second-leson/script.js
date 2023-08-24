// Создать функцию, которая принимает строку в виде аргумента. 
// Результатом должен быть возврат значения – количество гласных в 
// переданной строке.
// Работать предстоит с английской раскладкой. Гласными здесь являются 
// буквы: a, e, i, u, o.

function getVowel(value) {
    let volweles = ['a','e','i','u','o']
    let count = 0
    valueArray = value.split('')

    valueArray.forEach(e => {
        if (volweles.includes(e)) {
            count++
        }
    });

    return count
}
console.log(getVowel('qwerasdeeuuufiin'))