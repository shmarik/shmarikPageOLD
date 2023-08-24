let res = document.querySelector(".gotovo")
let deystviya = document.querySelector(".deystv")
let str = ""
res.innerHTML = "0"
deystviya.innerHTML = ""
function cnopochki(){

}
function clear(){
    str = 0
    res.innerHTML = "0"
    deystviya.innerHTML = ""
}

function calc(arg) {
    if (arg == "c") {
        str = ""
        res.innerHTML = "0"
    } else {
        str += arg
    }
    if (arg == "🠔") {
        str = str.slice(0, -3)
        console.log(str)
    }

    deystviya.innerHTML = str
    console.log(str);

    if (arg == "=") {
        str = str.slice(0, -1)
        console.log(str)
        res.innerHTML = `${eval(str)}`
        str = `${eval(str)}`
    }
}