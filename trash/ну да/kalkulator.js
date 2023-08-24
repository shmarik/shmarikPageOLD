let deystv = prompt("Введите действие minus,plus,ymnozh,delenie ")
let cifra1 = +prompt()
let cifra2 = +prompt()
function plus(x=0, y=0){
    
    return x + y
    }
function minus(x=0, y=0){

return x - y
}
function ymnozh(x=0, y=0){

return x * y
}
function delenie(x, y){

return x / y
}
if( cifra2 == 0 & deystv == "delenie"){
alert("s yma soshel ?")
}
if( `${deystv}` == "plus"){
    console.log("vse ok")
    let result1 = plus(cifra1, cifra2)
    alert(result1)
}
else if(deystv == "minus"){
    console.log("vse ok")
    let result1 = minus(cifra1, cifra2)
    alert(result1)
}
else if(deystv == "ymnozh"){
    console.log("vse ok")
    let result1 = ymnozh(cifra1, cifra2)
    alert(result1)
}
else if(deystv == "delenie"){
    console.log("vse ok")
    let result1 = delenie(cifra1, cifra2)
    alert(result1)
}
let deystv = prompt("Введите действие minus,plus,ymnozh,delenie ")
let cifra1 = +prompt()
let cifra2 = +prompt()
function plus(x=0, y=0){

return x + y
}
function minus(x=0, y=0){

return x - y
}
function ymnozh(x=0, y=0){

return x * y
}
function delenie(x, y){

return x / y
}
if( cifri == 0 && deystv == delenie){
alert("s yma soshel ?")
}
if( deystv == "plus"){
let result1 = plus(cifra1, cifra2)
alert(result1)
}
else if(deystv == "minus"){
minus(cifri)
}
else if(deystv == "ymnozh"){
ymnozh(cifri)
}
else if(deystv == "delenie"){
delenie(cifri)
}